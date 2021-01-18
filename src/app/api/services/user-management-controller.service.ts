/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { API_KeyAndPassword } from '../models/api-key-and-password';
import { API_NewUser } from '../models/api-new-user';
import { API_ResetPasswordInit } from '../models/api-reset-password-init';
import { API_User } from '../models/api-user';
import { API_UserWithRelations } from '../models/api-user-with-relations';
import { API_Count as LoopbackAPI_Count } from '../models/loopback/api-count';

@Injectable({
  providedIn: 'root',
})
export class UserManagementControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userManagementControllerChangeUserPassword
   */
  static readonly UserManagementControllerChangeUserPasswordPath = '/users/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeUserPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeUserPassword$Response(params: {

    /**
     * The input of password reset function
     */
    body: { 'email': string, 'password': string }
  }): Observable<StrictHttpResponse<{ 'id': string, 'email'?: string, 'name'?: string }>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerChangeUserPasswordPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{ 'id': string, 'email'?: string, 'name'?: string }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changeUserPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeUserPassword(params: {

    /**
     * The input of password reset function
     */
    body: { 'email': string, 'password': string }
  }): Observable<{ 'id': string, 'email'?: string, 'name'?: string }> {

    return this.changeUserPassword$Response(params).pipe(
      map((r: StrictHttpResponse<{ 'id': string, 'email'?: string, 'name'?: string }>) => r.body as { 'id': string, 'email'?: string, 'name'?: string })
    );
  }

  /**
   * Path part for operation userManagementControllerCount
   */
  static readonly UserManagementControllerCountPath = '/users/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `count()` instead.
   *
   * This method doesn't expect any request body.
   */
  count$Response(params?: {
    where?: any;
  }): Observable<StrictHttpResponse<LoopbackAPI_Count>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerCountPath, 'get');
    if (params) {
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackAPI_Count>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `count$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  count(params?: {
    where?: any;
  }): Observable<LoopbackAPI_Count> {

    return this.count$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackAPI_Count>) => r.body as LoopbackAPI_Count)
    );
  }

  /**
   * Path part for operation userManagementControllerLogin
   */
  static readonly UserManagementControllerLoginPath = '/users/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: {

    /**
     * The input of login function
     */
    body: { 'email': string, 'password': string }
  }): Observable<StrictHttpResponse<{ 'token'?: string }>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerLoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{ 'token'?: string }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: {

    /**
     * The input of login function
     */
    body: { 'email': string, 'password': string }
  }): Observable<{ 'token'?: string }> {

    return this.login$Response(params).pipe(
      map((r: StrictHttpResponse<{ 'token'?: string }>) => r.body as { 'token'?: string })
    );
  }

  /**
   * Path part for operation userManagementControllerGetCurrentUserDetails
   */
  static readonly UserManagementControllerGetCurrentUserDetailsPath = '/users/me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentUserDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserDetails$Response(params?: {
  }): Observable<StrictHttpResponse<{ 'id': string, 'email'?: string, 'name'?: string }>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerGetCurrentUserDetailsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{ 'id': string, 'email'?: string, 'name'?: string }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCurrentUserDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserDetails(params?: {
  }): Observable<{ 'id': string, 'email'?: string, 'name'?: string }> {

    return this.getCurrentUserDetails$Response(params).pipe(
      map((r: StrictHttpResponse<{ 'id': string, 'email'?: string, 'name'?: string }>) => r.body as { 'id': string, 'email'?: string, 'name'?: string })
    );
  }

  /**
   * Path part for operation userManagementControllerResetPasswordFinish
   */
  static readonly UserManagementControllerResetPasswordFinishPath = '/users/reset-password/finish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordFinish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordFinish$Response(params?: {
    body?: API_KeyAndPassword
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerResetPasswordFinishPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resetPasswordFinish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordFinish(params?: {
    body?: API_KeyAndPassword
  }): Observable<void> {

    return this.resetPasswordFinish$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userManagementControllerResetPasswordInit
   */
  static readonly UserManagementControllerResetPasswordInitPath = '/users/reset-password/init';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordInit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordInit$Response(params?: {
    body?: API_ResetPasswordInit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerResetPasswordInitPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resetPasswordInit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordInit(params?: {
    body?: API_ResetPasswordInit
  }): Observable<void> {

    return this.resetPasswordInit$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userManagementControllerFindById
   */
  static readonly UserManagementControllerFindByIdPath = '/users/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<API_User>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerFindByIdPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<API_User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    userId: string;
  }): Observable<API_User> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<API_User>) => r.body as API_User)
    );
  }

  /**
   * Path part for operation userManagementControllerSet
   */
  static readonly UserManagementControllerSetPath = '/users/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `set()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  set$Response(params: {
    userId: string;

    /**
     * update user
     */
    body?: API_User
  }): Observable<StrictHttpResponse<API_User>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerSetPath, 'put');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<API_User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `set$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  set(params: {
    userId: string;

    /**
     * update user
     */
    body?: API_User
  }): Observable<API_User> {

    return this.set$Response(params).pipe(
      map((r: StrictHttpResponse<API_User>) => r.body as API_User)
    );
  }

  /**
   * Path part for operation userManagementControllerDeleteById
   */
  static readonly UserManagementControllerDeleteByIdPath = '/users/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerDeleteByIdPath, 'delete');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: {
    userId: string;
  }): Observable<void> {

    return this.deleteById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userManagementControllerFind
   */
  static readonly UserManagementControllerFindPath = '/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params?: {
    filter?: any;
  }): Observable<StrictHttpResponse<Array<API_UserWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<API_UserWithRelations>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params?: {
    filter?: any;
  }): Observable<Array<API_UserWithRelations>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<API_UserWithRelations>>) => r.body as Array<API_UserWithRelations>)
    );
  }

  /**
   * Path part for operation userManagementControllerCreate
   */
  static readonly UserManagementControllerCreatePath = '/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
    body?: API_NewUser
  }): Observable<StrictHttpResponse<API_User>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementControllerService.UserManagementControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<API_User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params?: {
    body?: API_NewUser
  }): Observable<API_User> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<API_User>) => r.body as API_User)
    );
  }

}
