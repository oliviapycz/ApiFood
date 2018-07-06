-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Lun 25 Juin 2018 à 21:21
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `foodapi`
--

-- --------------------------------------------------------

--
-- Structure de la table `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `food` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `foods`
--

INSERT INTO `foods` (`id`, `food`) VALUES
(1, 'pomme(s)'),
(2, 'fraise(s)'),
(3, 'banane(s)'),
(4, 'cerise(s)'),
(5, 'artichaud(s)'),
(6, 'asperge(s)'),
(7, 'aubergine(s)'),
(8, 'blette(s)'),
(9, 'brocoli(s)'),
(10, 'céleri(s)'),
(11, 'champignon(s)'),
(12, 'chou(x) de bruxelles'),
(13, 'chou(x) blanc(s)'),
(14, 'chou(x) fleur(s)'),
(15, 'chou(x) rave(s)'),
(16, 'chou(x) vert(s)'),
(17, 'coeur(s) de palmier'),
(18, 'concombre(s)');

-- --------------------------------------------------------

--
-- Structure de la table `measures`
--

CREATE TABLE `measures` (
  `id` int(11) NOT NULL,
  `measure` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `measures`
--

INSERT INTO `measures` (`id`, `measure`) VALUES
(1, 'gr'),
(2, 'cl'),
(3, 'kg'),
(4, 'ml'),
(5, 'cuillère(s) à café'),
(6, 'cuillère(s) à soupe'),
(7, 'dl'),
(8, 'nuage(s)'),
(9, 'verre(s)'),
(10, 'tranche(s)'),
(12, 'pincée(s)'),
(13, 'bâton(s)'),
(14, 'capsule(s)'),
(15, 'oreillon(s)'),
(16, 'gousse(s)'),
(17, 'feuille(s)');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `measures`
--
ALTER TABLE `measures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT pour la table `measures`
--
ALTER TABLE `measures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
