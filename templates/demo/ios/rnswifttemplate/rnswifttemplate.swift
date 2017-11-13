import Foundation
//Note that for objective-c (and therefore RN) to see the class you need to give the @objc hint
//Also, any method exposed to objective-c runtime will also require the hint.
@objc(rnswifttemplate)
class rnswifttemplate: RCTEventEmitter {
    @objc func voidDemo(_ dic:[String:Any]) -> Void {
        //Note that the client will never hear back from this function
        for thisKey:String in dic.keys {
            print("Key: " + thisKey);
            print(dic[thisKey]);
        }
    }
    //Demonstrate a basic promise-based function in swift
    @objc func demo(_ message:String, success: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        if(message.count == 0) {
            print("I did not receive a message");
            reject(nil, nil, nil);
        } else {
            print("I received a message of " + message);
            success(["demo message: " + message]);
        }
    }
    //Demonstrate using the event emitter
    @objc func delayedSend(_ message: String, ms:Int) -> Void {
        let body = ["message": message];
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(ms)) {
            self.sendEvent(withName: "rnswifttemplate", body: body)
        }
    }
    //Note that any event name used in sendEvent above needs to be in this array.
    override func supportedEvents() -> [String]! {
        return ["rnswifttemplate"]
    }
    //Demonstrate setting constants. Note that constants can be (almost) any type, but that this function is only evaluated once, at initialidation
    @objc override func constantsToExport() -> Dictionary<AnyHashable, Any> {
        return [
            "a": "A",
            "b": "B",
            "startTime": Date().description
        ];
    }
    override class func requiresMainQueueSetup() -> Bool {
        return false;
    }
}
