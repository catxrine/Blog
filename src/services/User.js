import {baseUrl, requestOptions} from "../utils/requestHelper.js";

export function getAll() {
    return fetch(`${baseUrl}users`).then();
}

export function getById(id) {
    return fetch(`${baseUrl}users/${id}`).then();
}

export function logIn(params) {
    requestOptions.method = 'POST';
    // requestOptions.headers = {'Content-type': 'blob'};
    requestOptions.body = JSON.stringify({
        email: params.email,
        password: params.password
    });
    return fetch(`${baseUrl}login/`, requestOptions).then();
}