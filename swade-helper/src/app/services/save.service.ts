import { Injectable } from '@angular/core';
import { CoreModule } from '../core/core.module';

export enum SaveKeys {
  PARTY = 'PARTIES'
}

type SaveKey = SaveKeys.PARTY

@Injectable({
  providedIn: CoreModule
})
export class SaveService {
  private saveKeys: Array<string> = []
  constructor() { }


  public loadSave<T>(key: SaveKey): T | undefined {
    let loadedString: string | null
    try {
      loadedString = localStorage.getItem(key)
    } catch (e) {
      return undefined;
    }
    return loadedString !== null ? JSON.parse(loadedString) : undefined
  }

  public save(key: SaveKey, dataToSave: Record<string, any>) {
    localStorage.setItem(key, JSON.stringify(dataToSave))
  }
}
