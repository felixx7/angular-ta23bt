import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user.model";
import { Layer } from "../model/layer.model";
import { SiteType } from "../model/site-type.model";
import { CellType } from "../model/cell-type.model";
import { Area } from "../model/area.model";
import { Menu } from "../model/menu.model";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";
import { ApiLongLatResponse } from "../model/apiLongLat.response";
import { Vendor } from '../model/vendor.model';
import { Msc } from '../model/msc.model';
import { MicroCluster } from '../model/micro-cluster.model';
import { Bsc } from '../model/bsc.model';
import { Region } from '../model/region.model';
import { Tower } from '../model/tower.model';
import { Location } from '../model/location.model';
import { TowerClassification } from '../model/tower-classification.model';
import { TowerType } from '../model/tower-type.model';
import { Owner } from '../model/owner.model';
import { TowerLocation } from '../model/tower-location.model';
import { TowerProvider } from '../model/tower-provider.model';
import { TowerGenerator } from '../model/tower-generator.model';

@Injectable()
export class ApiService { 

  constructor(private http: HttpClient) { }
 BASE_URL:string='http://localhost:8080/';
// BASE_URL:string='http://10.23.51.254:9090/bts/';
  baseUrlUser: string = this.BASE_URL+'users/';
  baseUrlGroup: string = this.BASE_URL+'roles/';
  baseUrlMenu: string = this.BASE_URL+'access_menu/';
  baseUrlCell: string = this.BASE_URL+'cells/';
  baseUrlVendor: string = this.BASE_URL+'vendors/';
  baseUrlMsc: string = this.BASE_URL+'mscs/';
  baseUrlMicroCluster: string = this.BASE_URL+'microClusters/';
  baseUrlBsc: string = this.BASE_URL+'bscs/';
  baseUrlPoc: string = this.BASE_URL+'pocs/';
  baseUrlSite: string = this.BASE_URL+'sites/';
  baseUrlRegion: string = this.BASE_URL+'regions/';
  baseUrlArea: string = this.BASE_URL+'areas/';
  baseUrlLayer: string = this.BASE_URL+'layers/';
  baseUrlSiteType: string = this.BASE_URL+'site_types/';
  baseUrlCellType: string = this.BASE_URL+'cellTypes/';
  baseUrlTower: string = this.BASE_URL+'towers/';
  baseUrlLocation: string = this.BASE_URL+'locations/';
  baseUrlTowerClassification: string = this.BASE_URL+'tower_classifications/';
  baseUrlTowerType: string = this.BASE_URL+'tower_types/';
  baseUrlOwner: string = this.BASE_URL+'owners/';
  baseUrlTowerLocation: string = this.BASE_URL+'tower_locations/';
  baseUrlTowerProvider: string = this.BASE_URL+'tower_providers/';
  baseUrlTowerGenerator: string = this.BASE_URL+'tower_generators/';
  baseUrlTowerLocationTemp: string = this.BASE_URL+'tower_location_temps/';
  baseUrlLocationReference: string = this.BASE_URL+'location_references/';

  //baseUrlLongLat: string ='http://10.23.32.145/xlink/services/get_admin_property/?btsId=600&long=111.1794286&lat=-7.2293867';

  login(loginPayload) : Observable<ApiResponse> {
  return this.http.post<ApiResponse>(this.BASE_URL+'token/generate-token', loginPayload);
  //  return this.http.post<ApiResponse>(this.BASE_URL+'token/ldap', loginPayload);
  }

  //User
  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlUser);
  }
  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlUser + id);
  }
  getUserByParam(user: any): Observable<ApiResponse> {  
     return this.http.post<ApiResponse>(this.baseUrlUser.concat('list3/'), user);
  }
  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlUser, user);
  }
  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlUser + user.id, user);
  }
  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlUser + id);
  }

  //Group
  getGroups() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlGroup);
  }
  getGroupByParam(group: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlGroup.concat('list3/'), group);
  }
  getMenuBox(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlGroup.concat('listCombo/'));
  }
  getGroupById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlGroup + id);
  }
  getRoleByRoleId(id: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlGroup.concat('listComboSelected/') + id);
  }
  createGroup(group: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlGroup, group);
  }
  //updateGroup(group: Group): Observable<ApiResponse> {
  updateGroup(group : any): Observable<ApiResponse> {
    //return this.http.post<ApiResponse>(this.baseUrlGroup.concat('listComboSelected/') );
    return this.http.post<ApiResponse>(this.baseUrlGroup.concat('update/'), group);
  }
  deleteGroup(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlGroup + id);
  }

  //menu
  getMenus() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlMenu);
  }
  getMenuByParam(menu: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMenu.concat('list3/'), menu);
  }
  getMenuById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlMenu + id);
  }
  createMenu(menu: Menu): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMenu, menu);
  }
  updateMenu(menu: Menu): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlMenu + menu.id, menu);
  }
  deleteMenu(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlMenu + id);
  }

  //Cell
  getCells() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlCell);
  }
  getCellByParam(cell: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlCell.concat('listCell/'), cell);
  }
  getCellUploadFormByParam(cell: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlCell.concat('listCellUploadForm/'), cell);
  }

  
   deleteFileTemp(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlCell.concat('deleteCellBasedOnFileUploadId/') + id);
  }

  
  
  // processForm(id: any): Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrlCell.concat('saveToDB/')+id);  
  // }

  processForm(): Observable<ApiResponse> {
   // return this.http.get<ApiResponse>(this.baseUrlCell.concat('saveToDB/')+id);  
    return this.http.post<ApiResponse>(this.baseUrlCell.concat('saveToDB/'),null);  
  }

  processFormTower(): Observable<ApiResponse> {
    // return this.http.get<ApiResponse>(this.baseUrlCell.concat('saveToDB/')+id);  
     return this.http.post<ApiResponse>(this.baseUrlTower.concat('saveToDB/'),null);  
   }
  processFormBulk(data:any): Observable<ApiResponse> {
    // return this.http.get<ApiResponse>(this.baseUrlCell.concat('saveToDB/')+id);  
     return this.http.post<ApiResponse>(this.baseUrlTower.concat('saveToDBBulk/'),data);  
   }

   processUpdateTowerDatas(data:any): Observable<ApiResponse> {
   
     return this.http.post<ApiResponse>(this.baseUrlTower.concat('updateTowerDatas/'),data);  
   }

  processFormMicroCluster(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMicroCluster.concat('saveToDB/'),null);  
   
  }

  getCellById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlCell + id);
  }  
  createCell(cell: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlCell, cell);
  }

  uploadCell(cell: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlCell.concat('uploadMultiFiles/'), cell);
  }

  updateCell(poc : any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlCell + poc.id, poc);
  }
  //updateCell(cell : any): Observable<ApiResponse> {
  //  return this.http.post<ApiResponse>(this.baseUrlCell.concat('update/'), cell);
 // }
  deleteCell(id: any): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlCell + id);
  }

  // getSites() : Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrlCell.concat('sites'));
  // }

  getLayer() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlCell.concat('layers'));
  }

  getCellType() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlCell.concat('cellTypes'));
  }
  getSiteList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlCell.concat('sites/'));
  }

  
  //Vendor
  getVendors() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlVendor);
  }
  getVendorByParam(vendor: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlVendor.concat('listVendor/'), vendor);
  }
  getVendorById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlVendor + id);
  }  
    createVendor(vendor: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlVendor, vendor);
  }
    updateVendor(vendor : Vendor): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlVendor + vendor.id, vendor);
  }

   deleteVendor(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlVendor + id);
  }

  
  //Msc
  getMscs() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlMsc);
  }
  getMscByParam(msc: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMsc.concat('listMsc/'), msc);
  }
  getMscById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlMsc + id);
  }  
    createMsc(msc: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMsc, msc);
  }
    updateMsc(msc : Msc): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlMsc + msc.id, msc);
  }

   deleteMsc(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlMsc + id);
  }

  //MicroCluster
  getMicroCluster() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlMicroCluster);
  }
  getMicroClusterByParam(microCluster: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMicroCluster.concat('listMicroCluster/'), microCluster);
  }
  getMicroClusterById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlMicroCluster + id);
  }  
    createMicroCluster(microCluster: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMicroCluster, microCluster);
  }
    updateMicroCluster(microCluster : MicroCluster): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlMicroCluster + microCluster.id, microCluster);
  }

   deleteMicroCluster(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlMicroCluster + id);
  }

  getMicroClusterUploadFormByParam(cell: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlMicroCluster.concat('listMicroClusterUploadForm/'), cell);
  }

  //Bsc
  getBsc() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlBsc);
  }
  getBscByParam(bsc: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlBsc.concat('listBsc/'), bsc);
  }
  getBscById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlBsc + id);
  }  
  createBsc(bsc: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlBsc, bsc);
  }
  updateBsc(bsc : any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlBsc + bsc.id, bsc);
  }

  deleteBsc(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlBsc + id);
  }
  getReparentingUploadFormByParam(bsc: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlBsc.concat('listReparentingUploadForm/'), bsc);
  }

  processReparentingForm(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlBsc.concat('updateToDB/'),"");
   
  }

  
  //POC
  getPoc() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlPoc);
  }
  getPocByParam(poc: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlPoc.concat('listPoc/'), poc);
  }
  getPocById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlPoc + id);
  }  
    createPoc(poc: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlPoc, poc);
  }
    updatePoc(poc : any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlPoc + poc.id, poc);
  }

   deletePoc(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlPoc + id);
  }

  getAreaList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlPoc.concat('areas/'));
  }

  getRegionList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlPoc.concat('regions/'));
  }





  //Site
  getSites() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSite);
  }
  getSiteByParam(site: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlSite.concat('listSite/'), site);
  }
  getSiteById(id: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSite + id);
  }  
  createSite(site: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlSite, site);
  }
  updateSite(site: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlSite + site.id, site);
  }
  deleteSite(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlSite + id);
  }
  getVendorList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSite.concat('vendors/'));
  }
  getSiteTypeList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSite.concat('siteTypes/'));
  }
  getPocList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSite.concat('pocs/'));
  }
  getTowerList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSite.concat('towers/'));
  }

  //Region
  getRegions() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlRegion);
  }
  getRegionByParam(region: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlRegion.concat('listRegion/'), region);
  }
  getRegionById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlRegion + id);
  }  
  createRegion(region: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlRegion, region);
  }
  updateRegion(region: Region): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlRegion + region.id, region);
  }
  deleteRegion(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlRegion + id);
  }

  //Area
  getAreas() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlArea);
  }
  getAreaByParam(area: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlArea.concat('listSite/'), area);
  }
  getAreaById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlArea + id);
  }  
  createArea(area: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlArea, area);
  }
  updateArea(area: Area): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlArea + area.id, area);
  }
  deleteArea(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlArea + id);
  }

  //Layer
  getLayers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlLayer);
  }
  getLayerByParam(layer: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlLayer.concat('listLayer/'), layer);
  }
  getLayerById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlLayer + id);
  }         
  createLayer(layer: Layer): Observable<ApiResponse> { //any bisa array bisa object
    return this.http.post<ApiResponse>(this.baseUrlLayer, layer);
  }
  updateLayer(layer: Layer): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlLayer + layer.id, layer);
  }
  deleteLayer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlLayer + id);
  }

  //SiteType
  getSiteTypes() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSiteType);
  }
  getSiteTypeByParam(siteType: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlSiteType.concat('listSiteType/'), siteType);
  }
  getSiteTypeById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlSiteType + id);
  }         
  createSiteType(siteType: SiteType): Observable<ApiResponse> { //any bisa array bisa object
    return this.http.post<ApiResponse>(this.baseUrlSiteType, siteType);
  }
  updateSiteType(siteType: SiteType): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlSiteType + siteType.id, siteType);
  }
  deleteSiteType(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlSiteType + id);
  }

  //CellType
  getCellTypes() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlCellType);
  }
  getCellTypeByParam(cellType: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlCellType.concat('listCellType/'), cellType);
  }
  getCellTypeById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlCellType + id);
  }         
  createCellType(cellType: CellType): Observable<ApiResponse> { //any bisa array bisa object
    return this.http.post<ApiResponse>(this.baseUrlCellType, cellType);
  }
  updateCellType(cellType: CellType): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlCellType + cellType.id, cellType);
  }
  deleteCellType(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlCellType + id);
  }

  //Tower

  getTowerNumber(city:any) : Observable<ApiResponse> {//towerNumber
    return this.http.post<ApiResponse>(this.baseUrlTower.concat('towerNumber/'),city);
  }

  getTowers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTower);
  }
  getTowerByParam(tower: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTower.concat('listTower/'), tower);
  }
  getTowerById(id: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTower + id);
  }         
  createTower(tower: Tower): Observable<ApiResponse> { //any bisa array bisa object
    return this.http.post<ApiResponse>(this.baseUrlTower, tower);
  }
  updateTower(tower: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlTower + tower.id, tower);
  }
  deleteTower(id: String): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlTower + id);
  }
  getBscList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTower.concat('bscs/'));
  }
  getLocationList() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTower.concat('locations/'));
  }
  getPocListPrm() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTower.concat('pocs/'));
  }
  getTowerGeneratorIdListPrm() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTower.concat('towerGeneratorIds/'));
  }

  getTowerUploadFormByParam(tower: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTower.concat('listTowerUploadForm/'), tower);
  }

  getBulkUploadFormByParam(tower: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTower.concat('listBulkUploadForm/'), tower);
  }

  getTowerIdBulkUploadFormByParam(tower: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTowerGenerator.concat('listTowerGeneratorTempUploadForm/'), tower);
  }

  //
  getTowerRunNumber(){
    return this.http.get<ApiResponse>(this.baseUrlTower.concat('runNumber/'));
  }

  getUsername(){
    return this.http.get<ApiResponse>(this.baseUrlTower.concat('username/'));
  }




  //Location
  getLocations() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlLocation);
  }
  getLocationByParam(location: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlLocation.concat('listLocation/'), location);
  }
  getLocationById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlLocation + id);
  }         
  createLocation(location: Location): Observable<ApiResponse> { //any bisa array bisa object
    return this.http.post<ApiResponse>(this.baseUrlLocation, location);
  }
  updateLocation(location: Location): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlLocation + location.id, location);
  }
  deleteLocation(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlLocation + id);
  }

  getLocationLongLat(longitude:String,latitude:String): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrlLocation.concat('url/')+longitude+"/"+latitude);
  }
  
  // Tower Classification
  getTowerClassifications() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTowerClassification);
  }

  // Tower Type
  getTowerTypes() : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrlTowerType);
  }

  // Owner
  getOwners() : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrlOwner);
  }

  // TowerLocation
  createTowerLocation(towerLocation: any): Observable<ApiResponse> { //any bisa array bisa object
    return this.http.post<ApiResponse>(this.baseUrlTowerLocation, towerLocation);
  }
  getTowerLocationByTowerIds(towerId: String) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTowerLocation + towerId);
  }

  deleteTowerLocation(id:number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlTowerLocation + id);
  }

  // TowerLocationTemp
  createTowerLocationTemp(towerLocationTemp: any): Observable<ApiResponse> { //any bisa array bisa object
    return this.http.post<ApiResponse>(this.baseUrlTowerLocationTemp, towerLocationTemp);
  }

  //TowerProvider
  getTowerProviders() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTowerProvider);
  }
  getTowerProviderByParam(towerProvider: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTowerProvider.concat('listTowerProvider/'), towerProvider);
  }
  getTowerProviderById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTowerProvider + id);
  }  
  createTowerProvider(towerProvider: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTowerProvider, towerProvider);
  }
  updateTowerProvider(towerProvider: TowerProvider): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlTowerProvider + towerProvider.id, towerProvider);
  }
  deleteTowerProvider(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlTowerProvider + id);
  }

  //TowerGenerator
  getTowerGenerators() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTowerGenerator);
  }
  getTowerGeneratorByParam(towerGenerator: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTowerGenerator.concat('listTowerGeneratorId/'), towerGenerator);
  }
  getTowerGeneratorById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlTowerGenerator + id);
  }  
  createTowerGenerator(towerGenerator: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTowerGenerator, towerGenerator);
  }
  updateTowerGenerator(towerGenerator: TowerGenerator): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlTowerGenerator + towerGenerator.id, towerGenerator);
  }
  deleteTowerGenerator(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlTowerGenerator + id);
  }

  //LocationReference
  getLocationReferences() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlLocationReference);
  }
  getLocationReferenceByParam(LocationReference: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlLocationReference.concat('listLocationReference/'), LocationReference);
  }
  getLocationReferenceById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlLocationReference + id);
  }  
  createLocationReference(LocationReference: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlLocationReference, LocationReference);
  }
  updateLocationReference(LocationReference: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlLocationReference + LocationReference.id, LocationReference);
  }
  deleteLocationReference(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlLocationReference + id);
  }

}
