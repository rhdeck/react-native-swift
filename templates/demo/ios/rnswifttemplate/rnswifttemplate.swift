import Foundation
@objc(rnswifttemplate)
class rnswifttemplate: RCTEventEmitter {
    @objc func demo(_ message:String, success: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        sendEvent(withName: "Hello",body: [
            "message": "Take me to your leader"
        ]);
        success(["demo message: " + message]);
    }
    @objc func delayedSend(message: String, ms:Double) -> Void {
        delayedSend(["message": message], ms)
    }
    @objc func delayedSend(body: [String:Any], ms:Double) -> Void {
        let delay = dispatch_time(DISPATCH_TIME_NOW, Int64(1 * Double(NSEC_PER_MSEC)))
        dispatch_after(delay) {
            sendEvent(withName: "rnswifttemplate", body: body)
        }
    }
    override func supportedEvents() -> [String]! {
        return ["rnswifttemplate"]
    }
    @objc override func constantsToExport() -> Dictionary<AnyHashable, Any> {
        return [
            "a": "A",
            "b": "B"
        ];
    }
}
