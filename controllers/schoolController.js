import db from "../config/db.js";
import { calculateDistance } from "../utils/distance.js";

export const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (
    !name ||
    !address ||
    latitude === undefined ||
    longitude === undefined
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database error",
          error: err,
        });
      }

      res.status(201).json({
        message: "School added successfully",
      });
    }
  );
};

export const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "Latitude and Longitude required",
    });
  }

  const sql = "SELECT * FROM schools";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    const schoolsWithDistance = results.map((school) => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      return {
        ...school,
        distance: distance.toFixed(2),
      };
    });

    schoolsWithDistance.sort(
      (a, b) => a.distance - b.distance
    );

    res.json(schoolsWithDistance);
  });
};

export const getAllSchools = (req, res) => {
  const sql = "SELECT * FROM schools";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.json(results);
  });
};