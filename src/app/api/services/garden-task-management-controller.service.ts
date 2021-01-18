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

import { API_GardenObjectTask } from '../models/api-garden-object-task';
import { API_GardenObjectTaskPartial } from '../models/api-garden-object-task-partial';
import { API_GardenObjectTaskWithRelations } from '../models/api-garden-object-task-with-relations';
import { API_NewGardenObjectTask } from '../models/api-new-garden-object-task';

@Injectable({
  providedIn: 'root',
})
export class GardenTaskManagementControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation gardenTaskManagementControllerFindById
   */
  static readonly GardenTaskManagementControllerFindByIdPath = '/garden-tasks/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<API_GardenObjectTaskWithRelations>> {

    const rb = new RequestBuilder(this.rootUrl, GardenTaskManagementControllerService.GardenTaskManagementControllerFindByIdPath, 'get');
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
        return r as StrictHttpResponse<API_GardenObjectTaskWithRelations>;
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
    id: string;
    filter?: any;
  }): Observable<API_GardenObjectTaskWithRelations> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<API_GardenObjectTaskWithRelations>) => r.body as API_GardenObjectTaskWithRelations)
    );
  }

  /**
   * Path part for operation gardenTaskManagementControllerDeleteById
   */
  static readonly GardenTaskManagementControllerDeleteByIdPath = '/garden-tasks/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GardenTaskManagementControllerService.GardenTaskManagementControllerDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
    id: string;
  }): Observable<void> {

    return this.deleteById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation gardenTaskManagementControllerUpdateById
   */
  static readonly GardenTaskManagementControllerUpdateByIdPath = '/garden-tasks/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(params: {
    id: string;
    body?: API_GardenObjectTaskPartial
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GardenTaskManagementControllerService.GardenTaskManagementControllerUpdateByIdPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `updateById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById(params: {
    id: string;
    body?: API_GardenObjectTaskPartial
  }): Observable<void> {

    return this.updateById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation gardenTaskManagementControllerCreate
   */
  static readonly GardenTaskManagementControllerCreatePath = '/garden-tasks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
    body?: API_NewGardenObjectTask
  }): Observable<StrictHttpResponse<API_GardenObjectTask>> {

    const rb = new RequestBuilder(this.rootUrl, GardenTaskManagementControllerService.GardenTaskManagementControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<API_GardenObjectTask>;
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
    body?: API_NewGardenObjectTask
  }): Observable<API_GardenObjectTask> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<API_GardenObjectTask>) => r.body as API_GardenObjectTask)
    );
  }

}
