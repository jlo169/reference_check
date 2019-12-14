-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2019 at 03:00 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `NausicaaIQ`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `linkedIn` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `candidatePositions`
--

CREATE TABLE `candidatePositions` (
  `id` int(10) UNSIGNED NOT NULL,
  `openPositionId` int(10) UNSIGNED NOT NULL,
  `candidateId` int(10) UNSIGNED NOT NULL,
  `field` enum('do this','do that','pug','wug') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` mediumint(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `industry` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `subIndustry` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `size` mediumint(8) UNSIGNED NOT NULL,
  `yearFounded` date NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `findReferenceRequests`
--

CREATE TABLE `findReferenceRequests` (
  `id` int(10) UNSIGNED NOT NULL,
  `hiringManagerId` int(10) UNSIGNED NOT NULL,
  `candidateId` int(10) UNSIGNED NOT NULL,
  `openPositionId` int(10) UNSIGNED NOT NULL,
  `dateCreated` date NOT NULL,
  `openTask` timestamp NULL DEFAULT NULL,
  `sendRequest` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `focusAreas`
--

CREATE TABLE `focusAreas` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `jobTitlesId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hiringManager`
--

CREATE TABLE `hiringManager` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `companyId` mediumint(8) UNSIGNED NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobSpecificSkills`
--

CREATE TABLE `jobSpecificSkills` (
  `id` int(10) UNSIGNED NOT NULL,
  `jobTitlesId` int(10) UNSIGNED NOT NULL,
  `skillsId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobTitle`
--

CREATE TABLE `jobTitle` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `openPositions`
--

CREATE TABLE `openPositions` (
  `id` int(10) UNSIGNED NOT NULL,
  `companyId` int(11) UNSIGNED NOT NULL,
  `jobTitle` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `focusArea` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `salary` int(10) UNSIGNED NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reference`
--

CREATE TABLE `reference` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `linkedIn` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `company` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `jobTitle` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `seniority` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `manager` tinyint(1) NOT NULL,
  `ipAddress` varchar(39) COLLATE utf8_unicode_ci NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `referenceAssessmentRequest`
--

CREATE TABLE `referenceAssessmentRequest` (
  `id` int(10) UNSIGNED NOT NULL,
  `referenceId` int(10) UNSIGNED NOT NULL,
  `candidateId` int(10) UNSIGNED NOT NULL,
  `openPositionsId` int(10) UNSIGNED NOT NULL,
  `dateCreated` date NOT NULL,
  `openAssessment` int(11) DEFAULT NULL,
  `completeAssessment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `selfAssessment`
--

CREATE TABLE `selfAssessment` (
  `id` int(10) UNSIGNED NOT NULL,
  `candidatePositionsId` int(10) UNSIGNED NOT NULL,
  `jobTitle` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `seniority` smallint(5) UNSIGNED NOT NULL,
  `focusArea` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `skills` mediumblob NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skillAssessments`
--

CREATE TABLE `skillAssessments` (
  `id` int(10) UNSIGNED NOT NULL,
  `candidatePositionsId` int(10) UNSIGNED NOT NULL,
  `referenceId` int(10) UNSIGNED NOT NULL,
  `jobTitle` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `seniority` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `focusArea` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `skills` blob NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `candidatePositions`
--
ALTER TABLE `candidatePositions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `findReferenceRequests`
--
ALTER TABLE `findReferenceRequests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `focusAreas`
--
ALTER TABLE `focusAreas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hiringManager`
--
ALTER TABLE `hiringManager`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobSpecificSkills`
--
ALTER TABLE `jobSpecificSkills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobTitle`
--
ALTER TABLE `jobTitle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `openPositions`
--
ALTER TABLE `openPositions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reference`
--
ALTER TABLE `reference`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `referenceAssessmentRequest`
--
ALTER TABLE `referenceAssessmentRequest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selfAssessment`
--
ALTER TABLE `selfAssessment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skillAssessments`
--
ALTER TABLE `skillAssessments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `candidatePositions`
--
ALTER TABLE `candidatePositions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `findReferenceRequests`
--
ALTER TABLE `findReferenceRequests`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `focusAreas`
--
ALTER TABLE `focusAreas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `hiringManager`
--
ALTER TABLE `hiringManager`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `jobSpecificSkills`
--
ALTER TABLE `jobSpecificSkills`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `jobTitle`
--
ALTER TABLE `jobTitle`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `openPositions`
--
ALTER TABLE `openPositions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `reference`
--
ALTER TABLE `reference`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `referenceAssessmentRequest`
--
ALTER TABLE `referenceAssessmentRequest`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `selfAssessment`
--
ALTER TABLE `selfAssessment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `skillAssessments`
--
ALTER TABLE `skillAssessments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
