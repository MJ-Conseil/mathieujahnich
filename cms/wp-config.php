<?php
define( 'WP_CACHE', false );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */


define('WP_HOME','http://localhost:8080');
define('WP_SITEURL','http://localhost:8080');
define( 'WP_CONTENT_URL', 'http://localhost:8080/wp-content' );

define('FORCE_SSL_ADMIN', false);
define('FORCE_SSL_LOGIN',false);


// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME',  getenv("WORDPRESS_DB_NAME"));

/** MySQL database username */
define('DB_USER', getenv("WORDPRESS_DB_USER"));

/** MySQL database password */
define('DB_PASSWORD', getenv("WORDPRESS_DB_PASSWORD"));

/** MySQL hostname */
define('DB_HOST', getenv("WORDPRESS_DB_HOST"));

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'lT5e0j1Wp0UbBNuQrpSQO5aaiz+aIclPkDgeZKm6QKZ6lXTNGmCQXPy8h4qq');
define('SECURE_AUTH_KEY',  'akr1E7wXXMNCRiseK4u3z1f5YR1iRQ/9ytpL0TmJi1G1X7nHiootJOKQTVbb');
define('LOGGED_IN_KEY',    '1g8hQsHE9ex7wATGcTlymZFkuURFhglJL4DFqaVgh3oamVPMCgl9Cg/DJdbR');
define('NONCE_KEY',        '/5agNwIaNc89WTJ+zR3e1MziemmDZl+ytxbsGp12r4erjTqPQPcgS2FshSHz');
define('AUTH_SALT',        'yTMjSWdIXHmezz2FT6JRT/lDGuLtAyXOjzImEvHHxWXPCXb1reR6M6B9cap6');
define('SECURE_AUTH_SALT', 'rZ8XC+5jvK5NAuIK1ojm19bth02HCsX775gpSdfDxVqYtDvN+aBbOnjAI4EL');
define('LOGGED_IN_SALT',   'yvrhaaToyvBfhA3RRodChedK4sNNkHXFSidtWfnG7Z8GRFDu+zDzA5DUtDio');
define('NONCE_SALT',       '5iEIWvPQVMIwaLfa9uV0hhrkX6tuYcsvqpPWpsobzd1IcsXrJ0+PyU5trpem');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'mod340_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/* Fixes "Add media button not working", see http://www.carnfieldwebdesign.co.uk/blog/wordpress-fix-add-media-button-not-working/ */
define('CONCATENATE_SCRIPTS', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
