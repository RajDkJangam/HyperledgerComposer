
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * EntitlementFromVPMN transaction processor function.
 * @param {org.roaming.network.EntitlementFromVPMN} EntitlementFromVPMN The EntitlementFromVPMN transaction instance.
 * @transaction
 */
function entitlementFromVPMN(EntitlementFromVPMN) {

  var Number = EntitlementFromVPMN.Number;
  var TimeStamp = EntitlementFromVPMN.TimeStamp;
  var CallDuration = EntitlementFromVPMN.CallDuration;
  var DataDuration = EntitlementFromVPMN.DataDuration;
  
 //construct composite key and update status
  
  var CompositeKey = EntitlementFromVPMN.Number + EntitlementFromVPMN.TimeStamp;
  var CallCost = (parseInt(EntitlementFromVPMN.CallDuration) * 2).toString();
  var DataCost = (parseInt(EntitlementFromVPMN.DataDuration) * 3).toString();
  var Status = 'CDRApprovalPending';
   
    // Get the asset registry for the asset.
    return getAssetRegistry('org.roaming.network.CDR')
        .then(function (assetRegistry) {

            var factory = getFactory();
            var cdr =    factory.newResource('org.roaming.network','CDR',CompositeKey);
           
            cdr.Number = Number;
            cdr.TimeStamp = TimeStamp;
            cdr.CallDuration = CallDuration;
            cdr.DataDuration = DataDuration;
            cdr.CallCost = CallCost;
            cdr.DataCost = DataCost;
            cdr.Status = Status;
            cdr.Number = Number;
      
            return assetRegistry.add(cdr);

        });
        

}


/**
 * EntitlementFromVPMN transaction processor function.
 * @param {org.roaming.network.EntitlementFromHPMN} EntitlementFromHPMN The EntitlementFromHPMN transaction instance.
 * @transaction
 */
function entitlementFromHPMN(EntitlementFromHPMN) {

  var Number = EntitlementFromHPMN.Number;
  var TimeStamp = EntitlementFromHPMN.TimeStamp;
  var CompositeKey = EntitlementFromHPMN.Number + EntitlementFromHPMN.TimeStamp;
  var Status = 'CDRApprovedByHPMN';
  var cdrRegistryGlobal;
   
    // Get the asset registry for the asset.
    return getAssetRegistry('org.roaming.network.CDR').then(function (cdrRegistry) {
      
        cdrRegistryGlobal = cdrRegistry; 
        return cdrRegistry.get(CompositeKey).then(function(cdr) {
                      cdr.Status = Status;
                      return cdrRegistryGlobal.update(cdr)
            		 })
    
        });
        

}
