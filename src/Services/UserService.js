import React, { Component } from 'react';
import { apiTicher } from './apiTicher';

class userService{

      addUserService(user) {
        return apiTicher
        .post("students", user,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
        .then((response) => {
            return response.data;
        });
	}

  

}

export default new userService;
