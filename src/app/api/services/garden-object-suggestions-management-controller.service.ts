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

import { API_GardenObjectSuggestion } from '../models/api-garden-object-suggestion';
import { API_GardenObjectSuggestionPartial } from '../models/api-garden-object-suggestion-partial';
import { API_GardenObjectSuggestionWithRelations } from '../models/api-garden-object-suggestion-with-relations';
import { API_NewGardenObjectSuggestion } from '../models/api-new-garden-object-suggestion';
import { API_Count as LoopbackAPI_Count } from '../models/loopback/api-count';

@Injectable({
  providedIn: 'root',
})
export class GardenObjectSuggestionsManagementControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation gardenObjectSuggestionsManagementControllerCount
   */
  static readonly GardenObjectSuggestionsManagementControllerCountPath = '/suggestions/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `count()` instead.
   *
   * This method doesn't expect any request body.
   */
  count$Response(params?: {
    where?: any;
  }): Observable<StrictHttpResponse<LoopbackAPI_Count>> {

    const rb = new RequestBuilder(this.rootUrl, GardenObjectSuggestionsManagementControllerService.GardenObjectSuggestionsManagementControllerCountPath, 'get');
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
   * Path part for operation gardenObjectSuggestionsManagementControllerFindById
   */
  static readonly GardenObjectSuggestionsManagementControllerFindByIdPath = '/suggestions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<API_GardenObjectSuggestionWithRelations>> {

    const rb = new RequestBuilder(this.rootUrl, GardenObjectSuggestionsManagementControllerService.GardenObjectSuggestionsManagementControllerFindByIdPath, 'get');
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
        return r as StrictHttpResponse<API_GardenObjectSuggestionWithRelations>;
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
  }): Observable<API_GardenObjectSuggestionWithRelations> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<API_GardenObjectSuggestionWithRelations>) => r.body as API_GardenObjectSuggestionWithRelations)
    );
  }

  /**
   * Path part for operation gardenObjectSuggestionsManagementControllerReplaceById
   */
  static readonly GardenObjectSuggestionsManagementControllerReplaceByIdPath = '/suggestions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(params: {
    id: string;
    body?: API_GardenObjectSuggestion
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GardenObjectSuggestionsManagementControllerService.GardenObjectSuggestionsManagementControllerReplaceByIdPath, 'put');
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
   * To access the full response (for headers, for example), `replaceById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById(params: {
    id: string;
    body?: API_GardenObjectSuggestion
  }): Observable<void> {

    return this.replaceById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation gardenObjectSuggestionsManagementControllerDeleteById
   */
  static readonly GardenObjectSuggestionsManagementControllerDeleteByIdPath = '/suggestions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GardenObjectSuggestionsManagementControllerService.GardenObjectSuggestionsManagementControllerDeleteByIdPath, 'delete');
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
   * Path part for operation gardenObjectSuggestionsManagementControllerUpdateById
   */
  static readonly GardenObjectSuggestionsManagementControllerUpdateByIdPath = '/suggestions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(params: {
    id: string;
    body?: API_GardenObjectSuggestionPartial
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GardenObjectSuggestionsManagementControllerService.GardenObjectSuggestionsManagementControllerUpdateByIdPath, 'patch');
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
    body?: API_GardenObjectSuggestionPartial
  }): Observable<void> {

    return this.updateById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation gardenObjectSuggestionsManagementControllerFind
   */
  static readonly GardenObjectSuggestionsManagementControllerFindPath = '/suggestions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params?: {
    filter?: any;
  }): Observable<StrictHttpResponse<Array<API_GardenObjectSuggestionWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, GardenObjectSuggestionsManagementControllerService.GardenObjectSuggestionsManagementControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<API_GardenObjectSuggestionWithRelations>>;
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
  }): Observable<Array<API_GardenObjectSuggestionWithRelations>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<API_GardenObjectSuggestionWithRelations>>) => r.body as Array<API_GardenObjectSuggestionWithRelations>)
    );
  }

  /**
   * Path part for operation gardenObjectSuggestionsManagementControllerCreate
   */
  static readonly GardenObjectSuggestionsManagementControllerCreatePath = '/suggestions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
    body?: API_NewGardenObjectSuggestion
  }): Observable<StrictHttpResponse<API_GardenObjectSuggestion>> {

    const rb = new RequestBuilder(this.rootUrl, GardenObjectSuggestionsManagementControllerService.GardenObjectSuggestionsManagementControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<API_GardenObjectSuggestion>;
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
    body?: API_NewGardenObjectSuggestion
  }): Observable<API_GardenObjectSuggestion> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<API_GardenObjectSuggestion>) => r.body as API_GardenObjectSuggestion)
    );
  }

}
