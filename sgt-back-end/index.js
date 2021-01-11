const pg = require('pg');
const express = require('express');
const app = express();
const PORT = 3000;
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql =
    `select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select *
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    return res.status(400).json({
      error: 'Invalid. Must include name, course, AND score.'
    });
  } else if (parseInt(score, 10) < 0) {
    return res.status(400).json({
      error: 'Grade must be a positive integer.'
    });
  }
  const values = [name, course, score];
  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
      returning *;
  `;
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).send(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const { name, course, score } = req.body;
  const { gradeId } = req.params;
  if (!parseInt(gradeId, 10)) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
  } else if (score < 0) {
    return res.status(400).json({
      error: 'Grade must be a positive integer.'
    });
  }
  const values = [name, course, score, gradeId];
  const sql = `
    update "grades"
       set "name" = $1, "course" = $2, "score" = $3
    where "gradeId" = $4
    returning *;
  `;
  db.query(sql, values)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(404).json({
          error: 'Invalid gradeId or missing name, course, or score.'
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const { gradeId } = req.params;
  if (!parseInt(gradeId, 10)) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
  }
  const params = [gradeId];
  const sql = `
    delete from "grades"
          where "gradeId" = $1
      returning *;
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}.`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`listening on port ${PORT}!`);
});
