package pl.internet_shop.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static pl.internet_shop.entity.User.*;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private JWTTokenHelper jWTTokenHelper;

    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;

    public SecurityConfiguration(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider =
                new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(userDetailsService);
        return provider;
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint).and()
                .authorizeRequests((request) -> request.antMatchers( "/api/login").permitAll()
                        .antMatchers("/registration").permitAll()
                        .antMatchers("/api/users").hasAnyAuthority(ADMIN,WORKER)
                        .antMatchers("/api/users/{id}").hasAuthority(ADMIN)
                        .antMatchers("/api/workers").hasAuthority(ADMIN)
                        .antMatchers("/api/workers/*").hasAuthority(ADMIN)
                        .antMatchers("/api/products").permitAll()
                        .antMatchers("/api/products/*").permitAll()
                        .antMatchers("/api/products/gallery").permitAll()
                        .antMatchers("/api/products/gallery/null").permitAll()
                        .antMatchers(HttpMethod.GET,"/api/products/{id}").permitAll()
                        .antMatchers("/api/orders").hasAnyAuthority(WORKER,ADMIN,USER)
                        .antMatchers(HttpMethod.GET,"/api/orders/{id}").hasAnyAuthority(WORKER,ADMIN)
                        .antMatchers("/api/orders/save").hasAnyAuthority(USER, WORKER, ADMIN)
                        .antMatchers(HttpMethod.DELETE,"/api/orders/{id}").hasAnyAuthority(WORKER,ADMIN)
                        .antMatchers(HttpMethod.PUT,"/api/orders/{id}").hasAnyAuthority(WORKER,ADMIN)
                        .antMatchers("/api/products/save/gallery/{id}").hasAnyAuthority(WORKER,ADMIN)
                        .antMatchers(HttpMethod.GET,"/api/products/{id}/gallery").hasAnyAuthority(WORKER,ADMIN)
                        .antMatchers(HttpMethod.PUT,"/api/gallery/{id}").hasAnyAuthority(WORKER,ADMIN)
                        .antMatchers(HttpMethod.DELETE,"/api/products/{id}/gallery").hasAuthority(ADMIN)
                        .antMatchers(HttpMethod.DELETE,"/api/gallery/{id}").hasAuthority(ADMIN)
                        .antMatchers(HttpMethod.DELETE,"/api/products/{id}").hasAuthority(ADMIN)
                        .antMatchers(HttpMethod.PUT,"/api/products/{id}").hasAuthority(ADMIN)
                        .antMatchers("/api/producers").permitAll()
                        .antMatchers("/api/producers/save").hasAuthority(ADMIN)
                        .antMatchers(HttpMethod.DELETE,"/api/producers/{id}").hasAuthority(ADMIN)
                        .antMatchers(HttpMethod.PUT,"/api/producers/{id}").hasAuthority(ADMIN)
                        .antMatchers("/api/discounts/save/category/{id}").hasAuthority(ADMIN)
                        .antMatchers("/api/discounts/{id}").hasAuthority(ADMIN)
                        .antMatchers("/api/galleries").permitAll()
                        .antMatchers("/api/discounts").permitAll()
                        .antMatchers("/api/categories").permitAll()
                        .antMatchers("/api/categories/save").hasAuthority(ADMIN)
                        .antMatchers(HttpMethod.PUT,"/api/categories/{id}").hasAuthority(ADMIN)
                        .antMatchers(HttpMethod.DELETE,"/api/categories/{id}").hasAuthority(ADMIN)
                        .antMatchers("/worker/registration").hasAuthority(ADMIN)
                        .antMatchers("/admin/registration").hasAuthority(ADMIN)
                )
                .addFilterBefore(new JWTAuthenticationFilter(userDetailsService, jWTTokenHelper),
                        UsernamePasswordAuthenticationFilter.class);

        http.csrf().disable().cors().and().headers().frameOptions().disable();

    }

    @Bean
    public UserDetailsService userDetailsService() {
        return super.userDetailsService();
    }
}