import React, { Component } from 'react';
import { apiTicher } from './apiTicher';

class userService {

  addStudentService(user) {
    return apiTicher
      .post("/students", user)
      .then((response) => {
        return response.status;
      });
  }

  addTeachertService(user) {
    return apiTicher
      .post("/teachers", user)
      .then((response) => {
        return response.status;
      });
  }

  loginUserService(user) {
    return apiTicher
      .post("/students")
      .then((response) => {
        return response.data;
      });
  }

  getAllSubjects() {
    return apiTicher
      .get("/subject")
      .then((response) => {
        return response.data;
      });
  }

}

export default new userService;
