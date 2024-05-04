import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HitAppService {
  constructor(private http: HttpClient) {
    setInterval(() => this.hitAlgoTrade, 5000);
  }

  hitAlgoTrade() {
    this.http.get("https://algo-trade-va5l.onrender.com").subscribe((r) => {
      console.log("Hitting algo trade...");
    });
  }
}
