/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
module Api {
  export interface PageInfo {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    hasNext: boolean;
    hasPrevious: boolean;
  }
  export interface Rights {
    page: string;
    canView: boolean;
    canCRUD: boolean;
  }

  export namespace Responses {
    export interface BaseResponse {
      code: number;
      message: string;
    }

    interface ErrorMessageData {
      message: string;
      property: string;
    }

    export interface Error extends BaseResponse {
      data: ErrorMessageData[] | string;
    }
  }

  export namespace Login {
    export interface DataI {
      accessToken: string;
      firstName: string;
      lastName: string;
      email: string;
      roleName: string;
      permission: Rights[];
    }

    export interface Request {
      emailAddress: string;
      password: string;
    }

    export interface Response extends Responses.BaseResponse {
      data: DataI;
    }
  }
}

export default Api;
