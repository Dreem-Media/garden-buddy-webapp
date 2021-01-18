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

import { API_NewUserGardenTodoItemInUserGarden } from '../models/api-new-user-garden-todo-item-in-user-garden';
import { API_UserGardenTodoItem } from '../models/api-user-garden-todo-item';
import { API_UserGardenTodoItemPartial } from '../models/api-user-garden-todo-item-partial';
import { API_Count as LoopbackAPI_Count } from '../models/loopback/api-count';

@Injectable({
  providedIn: 'root',
})
export class UserGardenUserGardenTodoItemControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userGardenUserGardenTodoItemControllerFind
   */
  static readonly UserGardenUserGardenTodoItemControllerFindPath = '/user-gardens/{id}/user-garden-todo-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<Array<API_UserGardenTodoItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenUserGardenTodoItemControllerService.UserGardenUserGardenTodoItemControllerFindPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<API_UserGardenTodoItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: {
    id: string;
    filter?: any;
  }): Observable<Array<API_UserGardenTodoItem>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<API_UserGardenTodoItem>>) => r.body as Array<API_UserGardenTodoItem>)
    );
  }

  /**
   * Path part for operation userGardenUserGardenTodoItemControllerCreate
   */
  static readonly UserGardenUserGardenTodoItemControllerCreatePath = '/user-gardens/{id}/user-garden-todo-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: string;
    body?: API_NewUserGardenTodoItemInUserGarden
  }): Observable<StrictHttpResponse<API_UserGardenTodoItem>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenUserGardenTodoItemControllerService.UserGardenUserGardenTodoItemControllerCreatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<API_UserGardenTodoItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    id: string;
    body?: API_NewUserGardenTodoItemInUserGarden
  }): Observable<API_UserGardenTodoItem> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<API_UserGardenTodoItem>) => r.body as API_UserGardenTodoItem)
    );
  }

  /**
   * Path part for operation userGardenUserGardenTodoItemControllerDelete
   */
  static readonly UserGardenUserGardenTodoItemControllerDeletePath = '/user-gardens/{id}/user-garden-todo-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: string;
    where?: any;
  }): Observable<StrictHttpResponse<LoopbackAPI_Count>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenUserGardenTodoItemControllerService.UserGardenUserGardenTodoItemControllerDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: string;
    where?: any;
  }): Observable<LoopbackAPI_Count> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackAPI_Count>) => r.body as LoopbackAPI_Count)
    );
  }

  /**
   * Path part for operation userGardenUserGardenTodoItemControllerPatch
   */
  static readonly UserGardenUserGardenTodoItemControllerPatchPath = '/user-gardens/{id}/user-garden-todo-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: string;
    where?: any;
    body?: API_UserGardenTodoItemPartial
  }): Observable<StrictHttpResponse<LoopbackAPI_Count>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenUserGardenTodoItemControllerService.UserGardenUserGardenTodoItemControllerPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `patch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch(params: {
    id: string;
    where?: any;
    body?: API_UserGardenTodoItemPartial
  }): Observable<LoopbackAPI_Count> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackAPI_Count>) => r.body as LoopbackAPI_Count)
    );
  }

}
