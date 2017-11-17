-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 17, 2017 at 01:28 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moodify`
--

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
CREATE TABLE IF NOT EXISTS `songs` (
  `SongId` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Musician` varchar(30) NOT NULL,
  `Musician2` varchar(30) DEFAULT NULL,
  `Mood1` varchar(30) NOT NULL,
  `Mood2` varchar(30) DEFAULT NULL,
  `Mood3` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`SongId`),
  UNIQUE KEY `SongId` (`SongId`),
  KEY `SongId_2` (`SongId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`SongId`, `Name`, `Musician`, `Musician2`, `Mood1`, `Mood2`, `Mood3`) VALUES
(5, 'Olympian.mp3', 'PurplePlanet', NULL, 'Active', NULL, NULL),
(4, 'Jump Up.mp3', 'PurplePlanet', NULL, 'Active', NULL, NULL),
(3, 'Flying High.mp3', 'PurplePlanet', NULL, 'Active', NULL, NULL),
(6, 'Ecstasy.mp3', 'PurplePlanet', NULL, 'Awake', NULL, NULL),
(7, 'Light Em Up.mp3', 'PurplePlanet', NULL, 'Awake', NULL, NULL),
(8, 'MIndwarp.mp3', 'PurplePlanet', NULL, 'Awake', NULL, NULL),
(9, 'Upstep.mp3', 'PurplePlanet', NULL, 'Awake', NULL, NULL),
(10, 'Far And Wide.mp3', 'PurplePlanet', NULL, 'Cool', NULL, NULL),
(11, 'Slipstream.mp3', 'PurplePlanet', NULL, 'Cool', NULL, NULL),
(12, 'Tranquilize.mp3', 'PurplePlanet', NULL, 'Cool', NULL, NULL),
(13, 'Windswept.mp3', 'PurplePlanet', NULL, 'Cool', NULL, NULL),
(14, 'End Of Days.mp3', 'PurplePlanet', NULL, 'Focused', NULL, NULL),
(15, 'Introspection.mp3', 'PurplePlanet', NULL, 'Focused', NULL, NULL),
(16, 'Lanquidity.mp3', 'PurplePlanet', NULL, 'Focused', NULL, NULL),
(17, 'Reverie.mp3', 'PurplePlanet', NULL, 'Focused', NULL, NULL),
(18, 'A Touch Of Zen.mp3', 'PurplePlanet', NULL, 'Relaxing', NULL, NULL),
(19, 'Shifting Sands.mp3', 'PurplePlanet', NULL, 'Relaxing', NULL, NULL),
(20, 'Sundial.mp3', 'PurplePlanet', NULL, 'Relaxing', NULL, NULL),
(21, 'Troposphere.mp3', 'PurplePlanet', NULL, 'Relaxing', NULL, NULL),
(22, 'Contamination.mp3', 'PurplePlanet', NULL, 'Tense', NULL, NULL),
(23, 'In Pursuit.mp3', 'PurplePlanet', NULL, 'Tense', NULL, NULL),
(24, 'Lusus Naturae.mp3', 'PurplePlanet', NULL, 'Tense', NULL, NULL),
(25, 'The Orphanage.mp3', 'PurplePlanet', NULL, 'Tense', NULL, NULL),
(26, 'Turning The Screw.mp3', 'PurplePlanet', NULL, 'Tense', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
