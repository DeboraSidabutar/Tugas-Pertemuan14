// Package name dari Swag Labs (lihat "package" di Appium Inspector)
const APP_ID = 'com.swaglabsmobileapp'

class AppHelper {
    // Membuka / mengaktifkan aplikasi
    async launch() {
        await driver.execute('mobile: activateApp', { appId: APP_ID })
    }

    // Menutup aplikasi
    async close() {
        await driver.execute('mobile: terminateApp', { appId: APP_ID })
    }

    // Reset aplikasi (tutup, hapus data, buka lagi)
    async reset() {
        await driver.execute('mobile: terminateApp', { appId: APP_ID })
        await driver.execute('mobile: clearApp', { appId: APP_ID })
        await driver.execute('mobile: activateApp', { appId: APP_ID })
    }

    // Jalankan aplikasi di background selama N detik lalu aktifkan kembali
    async background(seconds = 3) {
        await driver.execute('mobile: backgroundApp', { seconds })
    }

    // Swipe layar (default: scroll ke bawah)
    async swipe(direction = 'up', percent = 0.75) {
        const { width, height } = await driver.getWindowSize()
        await driver.execute('mobile: swipeGesture', {
            left: Math.round(width * 0.1),
            top: Math.round(height * 0.2),
            width: Math.round(width * 0.8),
            height: Math.round(height * 0.6),
            direction,
            percent
        })
    }
}

export default new AppHelper()
