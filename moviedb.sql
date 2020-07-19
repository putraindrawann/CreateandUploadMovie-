-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: moviedb
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` char(36) NOT NULL,
  `nameGenres` varchar(225) DEFAULT NULL,
  `views` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES ('1','Action',8,NULL,'2020-07-19 14:45:53',NULL),('2','Animation',4,NULL,'2020-07-19 14:47:42',NULL),('3','Drama',5,NULL,'2020-07-19 14:47:21',NULL),('4','War',12,NULL,'2020-07-19 14:46:58',NULL);
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` char(36) NOT NULL,
  `title` varchar(225) DEFAULT NULL,
  `description` varchar(225) DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `artists` varchar(225) DEFAULT NULL,
  `genreId` char(36) DEFAULT NULL,
  `watchURL` varchar(225) DEFAULT NULL,
  `views` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `movie_ibfk_1` (`genreId`),
  CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES ('42f70720-c97a-11ea-a1f0-1b53eaa9e03a','La La Land','La La Land','00:02:12','Ryan','3','https://movielist.s3.ap-southeast-1.amazonaws.com/ShortMovie/La+La+Land+Official+Trailer+-+Dreamers+%282016%29+-+Ryan+Gosling+Movie.mp4',5,'2020-07-19 04:42:33','2020-07-19 13:36:19',NULL),('43ed9190-c979-11ea-a1f0-1b53eaa9e03a','Cars','Cars','00:02:24','John','2','https://movielist.s3.ap-southeast-1.amazonaws.com/ShortMovie/Cars+3+-+Official+US+Trailer.mp4',2,'2020-07-19 04:35:25','2020-07-19 10:12:19',NULL),('88499c20-c97a-11ea-a1f0-1b53eaa9e03a','Hacksaw Ridge ','Hacksaw Ridge ','00:02:25','Andrew','4','https://movielist.s3.ap-southeast-1.amazonaws.com/ShortMovie/Hacksaw+Ridge+%282016%29+Official+Trailer+%13+%1CBelieve%1D+-+Andrew+Garfield.mp4',12,'2020-07-19 04:44:29','2020-07-19 14:38:51',NULL),('bccf9d10-c979-11ea-a1f0-1b53eaa9e03a','Baby Driver','Baby Driver','00:02:31','Baby','1','https://movielist.s3.ap-southeast-1.amazonaws.com/ShortMovie/Baby+Driver+Trailer+%231+%282017%29+-+Movieclips+Trailers.mp4',3,'2020-07-19 04:38:48','2020-07-19 13:36:47',NULL),('d6b83150-c97a-11ea-a1f0-1b53eaa9e03a','Aquaman','Aquaman','00:02:25','Peter','1','https://movielist.s3.ap-southeast-1.amazonaws.com/ShortMovie/Aquaman+-+Official+Trailer+1+-+Now+Playing+In+Theaters.mp4',5,'2020-07-19 04:46:41','2020-07-19 14:46:15',NULL),('f7cacbb0-c979-11ea-a1f0-1b53eaa9e03a','Toy Story','Toy Story','00:02:27','Woody','2','https://movielist.s3.ap-southeast-1.amazonaws.com/ShortMovie/Toy+Story+4+-+Official+Trailer.mp4',2,'2020-07-19 04:40:27','2020-07-19 13:37:21',NULL);
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolemaster`
--

DROP TABLE IF EXISTS `rolemaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolemaster` (
  `id` char(36) NOT NULL,
  `role` varchar(225) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolemaster`
--

LOCK TABLES `rolemaster` WRITE;
/*!40000 ALTER TABLE `rolemaster` DISABLE KEYS */;
INSERT INTO `rolemaster` VALUES ('1','Admin',NULL,NULL,NULL),('2','User',NULL,NULL,NULL);
/*!40000 ALTER TABLE `rolemaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` char(36) NOT NULL,
  `userName` varchar(225) DEFAULT NULL,
  `userPassword` varchar(225) DEFAULT NULL,
  `fullName` varchar(225) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `roleId` char(36) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `rolemaster` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('15054f90-c806-11ea-a61a-db5526fdd715','awan','$2a$04$AT0WCz/oqVFmK4P4ZUesMe1cByuxsXy2fz1pg82tUjxoUvYC07kOW','awan','awan@example.com','1','2020-07-17 08:18:23','2020-07-17 08:18:23',NULL),('150c5470-c806-11ea-a61a-db5526fdd715','putra','$2a$05$YLl8dUCE19ViVs9ueF6X1Ob2EmWZbGF3.6MuyJQ9Twpt8OVie7ite','putra','putra@example.com','2','2020-07-17 08:18:23','2020-07-17 08:18:23',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-20  1:31:38
