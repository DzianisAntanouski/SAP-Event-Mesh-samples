module.exports = async (srv) => {
    const messaging = await cds.connect.to('messaging');

    srv.on('send1', (req) => {
        messaging.tx(req).emit({
            event: "com/sap/test/topic2",
            data: { number: 16 },
            headers: {}
        })
        return 'OK'
    })

    messaging.on('com/sap/test/topic2', msg => {
        console.log("Consume message with data: " + msg.data)
    })

}