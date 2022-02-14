-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Dec 13. 12:11
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `wp_beadando`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `album`
--

CREATE TABLE `album` (
  `AlbumID` int(11) NOT NULL,
  `Cim` varchar(250) NOT NULL,
  `EloadoID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `album`
--

INSERT INTO `album` (`AlbumID`, `Cim`, `EloadoID`) VALUES
(1, 'Album1', 1),
(2, 'Album2', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eloado`
--

CREATE TABLE `eloado` (
  `EloadoID` int(11) NOT NULL,
  `Name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `eloado`
--

INSERT INTO `eloado` (`EloadoID`, `Name`) VALUES
(1, 'Eloado1'),
(2, 'Eloado2');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szam`
--

CREATE TABLE `szam` (
  `SzamID` int(11) NOT NULL,
  `SzamCim` varchar(250) NOT NULL,
  `Ar` int(11) DEFAULT NULL,
  `AlbumID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `szam`
--

INSERT INTO `szam` (`SzamID`, `SzamCim`, `Ar`, `AlbumID`) VALUES
(1, 'Szam1', 20, 1),
(2, 'Szam2', 30, 2);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`AlbumID`);

--
-- A tábla indexei `eloado`
--
ALTER TABLE `eloado`
  ADD PRIMARY KEY (`EloadoID`);

--
-- A tábla indexei `szam`
--
ALTER TABLE `szam`
  ADD PRIMARY KEY (`SzamID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `album`
--
ALTER TABLE `album`
  MODIFY `AlbumID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `eloado`
--
ALTER TABLE `eloado`
  MODIFY `EloadoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `szam`
--
ALTER TABLE `szam`
  MODIFY `SzamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
