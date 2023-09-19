-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2023 a las 04:51:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `simon`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadisticas`
--

CREATE TABLE `estadisticas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `total_partidas` int(11) NOT NULL,
  `partidas_ganadas` int(11) NOT NULL,
  `partidas_perdidas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadisticas`
--

INSERT INTO `estadisticas` (`id`, `nombre`, `total_partidas`, `partidas_ganadas`, `partidas_perdidas`) VALUES
(1, 'Jugador1', 10, 6, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `id` int(11) NOT NULL,
  `victorias` int(11) NOT NULL,
  `derrotas` int(11) NOT NULL,
  `rondas_jugadas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id`, `victorias`, `derrotas`, `rondas_jugadas`) VALUES
(1, 1, 1, 2),
(2, 3, 2, 5),
(3, 1, 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `rondas_jugadas` int(11) NOT NULL,
  `veces_gano` int(11) NOT NULL,
  `veces_perdio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `rondas_jugadas`, `veces_gano`, `veces_perdio`) VALUES
(1, '', 0, 0, 0),
(2, '', 0, 0, 0),
(3, '', 0, 0, 0),
(4, '', 0, 0, 0),
(5, '', 0, 0, 0),
(6, '', 0, 0, 0),
(7, '', 0, 0, 0),
(8, '', 0, 0, 0),
(9, 'tobi', 1, 1, 0),
(10, 'ruso', 3, 1, 2),
(11, 'dargelos', 5, 1, 4),
(12, 'testy', 1, 1, 0),
(13, 'testy', 1, 1, 0),
(14, 'prueba', 2, 2, 0),
(15, 'prueba alerta', 1, 0, 1),
(16, 'fsaf', 1, 1, 0),
(17, 'karitob', 4, 3, 1),
(18, '', 2, 2, 0),
(19, '', 3, 2, 0),
(20, '', 3, 1, 2),
(21, '', 0, 0, 0),
(22, 'perrito malvado', 3, 0, 3),
(23, 'rivermibuenamigo', 4, 1, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `prueba`
--
ALTER TABLE `prueba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
