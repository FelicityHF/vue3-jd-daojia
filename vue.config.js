module.exports = {
    // 选项...
    devServer: {
        proxy: 'http://localhost:8080',
        public: '192.168.0.102:8080'  // 本地ip
    }
}