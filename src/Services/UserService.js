import React, { Component } from 'react';
import { apiTicher } from './apiTicher';

class userService{

      addUserService(user) {
        return apiTicher
        .post("/students")
        .then((response) => {
            return response.data;
        });
	}

}

export default new userService;
