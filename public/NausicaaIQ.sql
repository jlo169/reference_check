-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 03, 2020 at 01:07 AM
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
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(10) UNSIGNED NOT NULL,
  `openPositionId` int(10) UNSIGNED NOT NULL,
  `candidateId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assessments`
--

CREATE TABLE `assessments` (
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

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`id`, `name`, `email`, `linkedIn`, `phone`, `dateCreated`) VALUES
(1, 'Jon Snow', 'jsnow@thewall.com', 'linkedin.com/jsnow', '1234567890', '2019-12-20');

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
-- Table structure for table `jobSkill`
--

CREATE TABLE `jobSkill` (
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
-- Table structure for table `jobTrait`
--

CREATE TABLE `jobTrait` (
  `id` int(10) UNSIGNED NOT NULL,
  `jobTitleId` int(10) UNSIGNED NOT NULL,
  `traitId` int(10) UNSIGNED NOT NULL
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
-- Table structure for table `qualityAssessments`
--

CREATE TABLE `qualityAssessments` (
  `id` int(10) UNSIGNED NOT NULL,
  `assessmentsId` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `keyVal` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questionAssessments`
--

CREATE TABLE `questionAssessments` (
  `id` int(10) UNSIGNED NOT NULL,
  `assessmentId` int(11) NOT NULL,
  `keyVal` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL
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
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trait`
--

CREATE TABLE `trait` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assessments`
--
ALTER TABLE `assessments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
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
-- Indexes for table `jobSkill`
--
ALTER TABLE `jobSkill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobTitle`
--
ALTER TABLE `jobTitle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobTrait`
--
ALTER TABLE `jobTrait`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `openPositions`
--
ALTER TABLE `openPositions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qualityAssessments`
--
ALTER TABLE `qualityAssessments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questionAssessments`
--
ALTER TABLE `questionAssessments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reference`
--
ALTER TABLE `reference`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trait`
--
ALTER TABLE `trait`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `assessments`
--
ALTER TABLE `assessments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT;
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
-- AUTO_INCREMENT for table `jobSkill`
--
ALTER TABLE `jobSkill`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `jobTitle`
--
ALTER TABLE `jobTitle`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `jobTrait`
--
ALTER TABLE `jobTrait`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `openPositions`
--
ALTER TABLE `openPositions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `qualityAssessments`
--
ALTER TABLE `qualityAssessments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `questionAssessments`
--
ALTER TABLE `questionAssessments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `reference`
--
ALTER TABLE `reference`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `trait`
--
ALTER TABLE `trait`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
