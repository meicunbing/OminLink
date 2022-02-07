package org.ominlink.app.repository;

import org.ominlink.app.models.ERole;
import org.ominlink.app.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author meicunbing
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    /**
     * 查询角色
     *
     * @param name 名字
     * @return 角色
     */
    Optional<Role> findByName(ERole name);
}
