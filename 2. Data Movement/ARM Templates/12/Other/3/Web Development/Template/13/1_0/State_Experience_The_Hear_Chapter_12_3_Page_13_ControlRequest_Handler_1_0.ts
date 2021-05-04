interface State_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 {
    '$schema': string;
    contentVersion: string;
    parameters: Parameters;
    variables: ModelDataObject[];
    resources: Resource[];
    outputs: Output[];
}

interface Output {
    baseDIMistakes?: any[];
    baseDIObservations?: any[];
}

interface Resource {
    baseDIProfiles: BaseDIProfile[];
}

interface BaseDIProfile {
    baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile: string;
    baseDI_NerdyGroupAffiliates_DynamicWebsite_DocumentationProfile: BaseDINerdyGroupAffiliatesDynamicWebsiteDocumentationProfile[];
}

interface BaseDINerdyGroupAffiliatesDynamicWebsiteDocumentationProfile {
    baseDI_NerdyGroupAffiliates_DynamicWebsitePurpose: string;
    baseDI_NerdyGroupAffiliates_DynamicWebsite: string;
    baseDI_NerdyGroupAffiliates_DynamicWebsiteDocumentation: BaseDINerdyGroupAffiliatesDynamicWebsiteDocumentation;
}

interface BaseDINerdyGroupAffiliatesDynamicWebsiteDocumentation {
    baseDINerdyGroupAffiliatesDynamicWebsiteDocumentationParameters: ModelDataObject[];
    baseDINerdyGroupAffiliatesDynamicWebsiteDocumentationFields: ModelDataObject[];
    baseDINerdyGroupAffiliatesDynamicWebsiteDocumentationRoutes: BaseDINerdyGroupAffiliatesDynamicWebsiteDocumentationRoute[];
    baseDINerdyGroupAffiliatesDynamicWebsiteValidationRules: BaseDINerdyGroupAffiliatesDynamicWebsiteValidationRule[];
}

interface BaseDINerdyGroupAffiliatesDynamicWebsiteValidationRule {
    mistakes: Mistake[];
}

interface Mistake {
    mistake_route_POST: MistakeroutePOST[];
}

interface MistakeroutePOST {
    error_100: string;
}

interface BaseDINerdyGroupAffiliatesDynamicWebsiteDocumentationRoute {
    endpoints?: Endpoint[];
    routes?: Route[];
}

interface Route {
    route_POST: RoutePOST[];
    route_GET: RoutePOST[];
    route_PUT: RoutePOST[];
    route_Delete: RoutePOST[];
}

interface RoutePOST {
    desciption: string;
    availableMethods: AvailableMethod[];
}

interface AvailableMethod {
    description: string;
    methodName: string;
}

interface Endpoint {
    endpoint_Live: string;
    endpoint_Local_DotNetCore: string;
    endpoint_Local_NodeJS: string;
}

interface Parameters {
    baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile: BaseDINerdyGroupAffiliatesDynamicWebsiteMainProfile;
}

interface BaseDINerdyGroupAffiliatesDynamicWebsiteMainProfile {
    type: string;
    defaultValue: DefaultValue;
    metadata: Metadata;
}

interface Metadata {
    description: string;
}

interface DefaultValue {
    baseDIInstructions: BaseDIInstructions;
}

interface BaseDIInstructions {
    configuration: Configuration[];
    presentation: ModelDataObject[];
    business: Business[];
    data: Datum[];
}

interface Datum {
    key_1: string;
    values_2: Values24[];
    type_3: string;
    buzzWords_4: string;
    extraKeyValuePairs_5: ModelDataObject[];
}

interface Values24 {
    key_2_1: string;
    values_2_2: Values224[];
}

interface Values224 {
    key_2_2_1: string;
    values_2_2_2: Values2223[];
}

interface Values2223 {
    _2_2_2_1_repositoryInformationDataDetails: _2221repositoryInformationDataDetails;
}

interface _2221repositoryInformationDataDetails {
    searchkey: string;
    type: string;
    value: Value8[];
}

interface Value8 {
    _2_2_2_1_1_repositoryInformationDataItem: _22211repositoryInformationDataItem;
    _2_2_2_1_2_repositoryInformationDataItem: _22211repositoryInformationDataItem;
    _2_2_2_1_3_repositoryInformationDataItem: _22213repositoryInformationDataItem;
}

interface _22213repositoryInformationDataItem {
    searchkey: string;
    type: string;
    value: Value7;
    _2_2_2_1_4_repositoryInformationDataItem: _22211repositoryInformationDataItem;
}

interface _22211repositoryInformationDataItem {
    searchkey: string;
    type: string;
    value: Value7;
}

interface Value7 {
    DataItemRowID: string;
    DataItemLocation: string;
}

interface Business {
    key_1: string;
    values_2: Values23[];
    type_3: string;
    buzzWords_4: string;
    extraKeyValuePairs_5: any[];
}

interface Values23 {
    key_2_1: string;
    values_2_2: Values223[];
}

interface Values223 {
    key_2_2_1: string;
    values_2_2_2: Values2222[];
}

interface Values2222 {
    _2_2_2_1_functionInformationEventCallStackDetails: _2221functionInformationEventCallStackDetails;
}

interface _2221functionInformationEventCallStackDetails {
    searchkey: string;
    type: string;
    value: Value6[];
}

interface Value6 {
    _2_2_2_1_1_functionInformationEventCallStackItem: _22211functionInformationEventCallStackItem;
}

interface _22211functionInformationEventCallStackItem {
    searchkey: string;
    type: string;
    value: Value5;
}

interface Value5 {
    EventCallStackItemRowID: string;
    EventCallStackItems: EventCallStackItem[];
}

interface EventCallStackItem {
    Notes: string;
    Events: Event[];
}

interface Event {
    functionsEnabled?: string;
    functionEvent?: string;
    functionName?: string;
    functionParameters?: FunctionParameter[];
}

interface FunctionParameter {
    parameterName: string;
    parameterTypeScriptDataType: string;
    parameterDefaultValue: string;
}

interface Configuration {
    key_1: string;
    values_2: Values2[];
    type_3: string;
    buzzWords_4: string;
    extraKeyValuePairs_5: ModelDataObject[];
}

interface Values2 {
    key_2_1: string;
    values_2_2: Values22[];
}

interface Values22 {
    key_2_2_1: string;
    values_2_2_2: Values222[];
}

interface Values222 {
    _2_2_2_1_serverInformationSetupDetails?: _2221serverInformationSetupDetails;
    _2_2_2_2_serverInformationSetupDetails?: _2222serverInformationSetupDetails;
}

interface _2222serverInformationSetupDetails {
    searchkey: string;
    type: string;
    value: Value4[];
}

interface Value4 {
    _2_2_2_2_1_serverInformationSetupItem: _22221serverInformationSetupItem;
}

interface _22221serverInformationSetupItem {
    searchkey: string;
    type: string;
    value: Value3;
}

interface Value3 {
    SetupItemRowID: string;
    SetupItemEnvironmentClient: ModelDataObject;
    SetupItemEnvironmentServer: SetupItemEnvironmentServer2;
}

interface SetupItemEnvironmentServer2 {
    SetupItemEnvironmentServerMetaDataPaths: SetupItemEnvironmentServerMetaDataPath[];
}

interface SetupItemEnvironmentServerMetaDataPath {
    MetaDataLocalPath: string;
}

interface _2221serverInformationSetupDetails {
    searchkey: string;
    type: string;
    value: Value2[];
}

interface Value2 {
    _2_2_2_1_1_serverInformationSetupItem: _22211serverInformationSetupItem;
}

interface _22211serverInformationSetupItem {
    searchkey: string;
    type: string;
    value: Value;
}

interface Value {
    SetupItemRowID: string;
    SetupItemEnvironmentName: string;
    SetupItemEnvironmentPort: string;
    SetupItemEnvironmentDomainName: string;
    SetupItemEnvironmentClient: SetupItemEnvironmentClient;
    SetupItemEnvironmentServer: SetupItemEnvironmentServer;
}

interface SetupItemEnvironmentServer {
    SetupItemTransportItemRoutesGET: SetupItemTransportItemRoutesGET[];
}

interface SetupItemTransportItemRoutesGET {
    SetupItemTransportItemRoute: SetupItemTransportItemRoute;
}

interface SetupItemTransportItemRoute {
    ControllerRoutes: string[];
    ControllerName: string;
    ControllerAvailableQueryStrings: string[];
    ModelDataObject: ModelDataObject;
    ModelDataParameter: string;
    ModelDataRemote: ModelDataObject;
    RequiredDependencies: RequiredDependency[];
}

interface RequiredDependency {
    Description?: string;
    Name?: string;
    Type?: string;
    Target?: string;
    ExtraData?: any[];
}

interface ModelDataObject {
}

interface SetupItemEnvironmentClient {
    SetupItemBuildItemClientPath: string;
    SetupItemDataPath: string;
    SetupItemDocumentPath: string;
    SetupItemFontPath: string;
    SetupItemImagePath: string;
    SetupItemScriptPath: string;
}