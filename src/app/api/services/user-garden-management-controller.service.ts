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

import { API_GardenObjectWithRelations } from '../models/api-garden-object-with-relations';
import { API_NewUserGarden } from '../models/api-new-user-garden';
import { API_UserGarden } from '../models/api-user-garden';
import { API_UserGardenPartial } from '../models/api-user-garden-partial';
import { API_UserGardenWithRelations } from '../models/api-user-garden-with-relations';

@Injectable({
  providedIn: 'root',
})
export class UserGardenManagementControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userGardenManagementControllerDeleteOwnedItemToGarden
   */
  static readonly UserGardenManagementControllerDeleteOwnedItemToGardenPath = '/user-gardens/{id}/owned-items/{gardenObjectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOwnedItemToGarden()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOwnedItemToGarden$Response(params: {
    id: string;
    gardenObjectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerDeleteOwnedItemToGardenPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('gardenObjectId', params.gardenObjectId, {});
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
   * To access the full response (for headers, for example), `deleteOwnedItemToGarden$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOwnedItemToGarden(params: {
    id: string;
    gardenObjectId: string;
  }): Observable<void> {

    return this.deleteOwnedItemToGarden$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userGardenManagementControllerGetOwnedUserGardenItems
   */
  static readonly UserGardenManagementControllerGetOwnedUserGardenItemsPath = '/user-gardens/{id}/owned-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnedUserGardenItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnedUserGardenItems$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<Array<API_GardenObjectWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerGetOwnedUserGardenItemsPath, 'get');
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
        return r as StrictHttpResponse<Array<API_GardenObjectWithRelations>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnedUserGardenItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnedUserGardenItems(params: {
    id: string;
    filter?: any;
  }): Observable<Array<API_GardenObjectWithRelations>> {

    return this.getOwnedUserGardenItems$Response(params).pipe(
      map((r: StrictHttpResponse<Array<API_GardenObjectWithRelations>>) => r.body as Array<API_GardenObjectWithRelations>)
    );
  }

  /**
   * Path part for operation userGardenManagementControllerAddOwnedItemToGarden
   */
  static readonly UserGardenManagementControllerAddOwnedItemToGardenPath = '/user-gardens/{id}/owned-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOwnedItemToGarden()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOwnedItemToGarden$Response(params: {
    id: string;
    body?: any
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerAddOwnedItemToGardenPath, 'post');
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
   * To access the full response (for headers, for example), `addOwnedItemToGarden$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOwnedItemToGarden(params: {
    id: string;
    body?: any
  }): Observable<void> {

    return this.addOwnedItemToGarden$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userGardenManagementControllerFindById
   */
  static readonly UserGardenManagementControllerFindByIdPath = '/user-gardens/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<API_UserGardenWithRelations>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerFindByIdPath, 'get');
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
        return r as StrictHttpResponse<API_UserGardenWithRelations>;
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
  }): Observable<API_UserGardenWithRelations> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<API_UserGardenWithRelations>) => r.body as API_UserGardenWithRelations)
    );
  }

  /**
   * Path part for operation userGardenManagementControllerReplaceById
   */
  static readonly UserGardenManagementControllerReplaceByIdPath = '/user-gardens/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(params: {
    id: string;
    body?: API_UserGarden
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerReplaceByIdPath, 'put');
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
    body?: API_UserGarden
  }): Observable<void> {

    return this.replaceById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userGardenManagementControllerDeleteById
   */
  static readonly UserGardenManagementControllerDeleteByIdPath = '/user-gardens/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerDeleteByIdPath, 'delete');
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
   * Path part for operation userGardenManagementControllerUpdateById
   */
  static readonly UserGardenManagementControllerUpdateByIdPath = '/user-gardens/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(params: {
    id: string;
    body?: API_UserGardenPartial
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerUpdateByIdPath, 'patch');
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
    body?: API_UserGardenPartial
  }): Observable<void> {

    return this.updateById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userGardenManagementControllerCreate
   */
  static readonly UserGardenManagementControllerCreatePath = '/user-gardens';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
    body?: API_NewUserGarden
  }): Observable<StrictHttpResponse<API_UserGarden>> {

    const rb = new RequestBuilder(this.rootUrl, UserGardenManagementControllerService.UserGardenManagementControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<API_UserGarden>;
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
    body?: API_NewUserGarden
  }): Observable<API_UserGarden> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<API_UserGarden>) => r.body as API_UserGarden)
    );
  }

}
