CREATE TABLE IF NOT EXISTS roles (
                                     role_id SERIAL PRIMARY KEY,
                                     role_name VARCHAR(50) UNIQUE NOT NULL
    );

CREATE TABLE IF NOT EXISTS users (
                                     id BIGSERIAL PRIMARY KEY,
                                     username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    location VARCHAR(50),
    phone_number VARCHAR(10)
    );

CREATE TABLE IF NOT EXISTS user_roles (
                                          user_id BIGINT NOT NULL,
                                          role_id INT NOT NULL,
                                          PRIMARY KEY (user_id, role_id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(role_id)
    );
