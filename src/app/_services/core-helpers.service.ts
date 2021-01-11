import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { SearchFilterParams } from '../_models/_helpers/search-filter-params';

@Injectable({
  providedIn: 'root',
})
export class CoreHelpersService {
  private itemsPerPage = 25;

  getCountParams(serachTerm?: string, searchType?: string): { where: {} } {
    const params: { where: {} } = { where: {} };
    let whereParam = {};

    if (searchType === 'user') {
      whereParam = {
        or: [
          { email: { like: serachTerm, options: 'i' } },
          { firstName: { like: serachTerm, options: 'i' } },
          { lastName: { like: serachTerm, options: 'i' } },
        ],
      };
    } else {
      whereParam = {
        or: [
          { name: { like: serachTerm, options: 'i' } },
          { description: { like: serachTerm, options: 'i' } },
        ],
      };
    }
    params.where = JSON.stringify(whereParam);
    return params;
  }

  getSerachPaginationParams(
    page?: number,
    serachTerm?: string,
    searchType?: string
  ): { filter: {} } {
    const params: { filter: {} } = { filter: {} };
    let searchFilter = new SearchFilterParams();
    searchFilter = {
      order: 'ownedCount DESC',
      limit: this.itemsPerPage.toString(),
    };
    if (page) {
      const offset = (page - 1) * this.itemsPerPage;
      searchFilter.skip = offset.toString();
    }
    if (serachTerm && serachTerm.length) {
      if (searchType === 'user') {
        searchFilter.where = {
          or: [
            { email: { like: serachTerm, options: 'i' } },
            { firstName: { like: serachTerm, options: 'i' } },
            { lastName: { like: serachTerm, options: 'i' } },
          ],
        };
      } else {
        searchFilter.where = {
          or: [
            { name: { like: serachTerm, options: 'i' } },
            { description: { like: serachTerm, options: 'i' } },
          ],
        };
      }
    }
    params.filter = JSON.stringify(searchFilter);
    return params;
  }
}
