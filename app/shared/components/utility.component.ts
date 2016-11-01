export class UtilityComponent {

  public static MOVIE_API_URL: string = "https://api.themoviedb.org/3/";
  private static API_KEY: string = "?&api_key=089dde2396217b62fb377d77459dbfa9";
  private static VIDEOS: string = "&append_to_response=videos";

  static getUrl(path: string){
    return this.MOVIE_API_URL+path+this.API_KEY;
  }

  static getUrlVideos(path: string){
    return this.MOVIE_API_URL+path+this.API_KEY+this.VIDEOS;
  }
}