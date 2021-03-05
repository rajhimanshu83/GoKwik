export default function Redeemed() {
  return (
    <div className="verify ">
      <div className="verify-box">
        <div className="illustration-wrapper rounded-3xl">
          <img
            className="rounded-3xl"
            style={{ width: 1080 }}
            src="/paytmcard.png"
            alt="paytmcard"
          />
        </div>

        <div className="w-full p-5 text-center">
          <div className="px-2 py-6 flex items-center lg:bg-white rounded-3xl">
            <div className="flex ml-4 mr-4">
              <img
                src="/whatsapp.png"
                className="w-10 h-10 object-cover rounded object-top"
              />
              <div className="flex flex-col pl-4">
                <h2 className="font-medium text-sm">
                  Where will I get the gift card ?
                </h2>
                <h3 className="text-gray-500 text-sm">
                  You will receive on Whatsapp/SMS on your phone.
                </h3>
              </div>
            </div>
          </div>

          <div className="px-2 py-6 flex items-center rounded-3xl">
            <div className="flex ml-4 mr-4">
              <img
                src="giftcard.png"
                className="w-10 h-10 object-cover rounded object-top"
              />
              <div className="flex flex-col pl-4">
                <h2 className="font-medium text-sm">
                  Where will I receive the gift card ?
                </h2>
                <h3 className="text-gray-500 text-sm">
                  Within 48 hours, when your Man Matters order is delivered.
                </h3>
              </div>
            </div>
          </div>

          <div className="px-2 py-6 flex items-center rounded-3xl">
            <div className="flex ml-4 mr-4">
              <img
                src="/cancel.png"
                className="w-10 h-10 object-cover rounded object-top"
              />
              <div className="flex flex-col pl-4">
                <h2 className="font-medium text-sm">What if I cancel the order?</h2>
                <h3 className="text-gray-500 text-sm">
                  The voucher will not be delivered if you cancel the order.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
