package org.ominlink.app.repository;

import org.ominlink.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author meicunbing
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * 查询用户
     *
     * @param username 用户名
     * @return 用户
     */
    Optional<User> findByUsername(String username);

    /**
     * 根据用户名判断用户是否存在
     *
     * @param username 用户名
     * @return 是否存在
     */
    Boolean existsByUsername(String username);

    /**
     * 根据邮箱判断用户是否存在
     *
     * @param email 邮箱
     * @return 是否存在
     */
    Boolean existsByEmail(String email);
}
