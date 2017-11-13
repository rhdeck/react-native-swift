#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(rnswifttemplate, NSObject)
RCT_EXTERN_METHOD(demo:(NSString *)name success:(RCTPromiseResolveBlock)success reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(voidDemo:(NSString *)name);
RCT_EXTERN_METHOD(delayedSend:(NSString *)message ms:(int)ms);
@end

