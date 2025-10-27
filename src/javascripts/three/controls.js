export class FirstPersonControls {
    constructor(camera, moveSpeed = 0.1) {
        this.camera = camera;
        this.moveSpeed = moveSpeed;
        this.keys = { w: false, a: false, s: false, d: false };
        this.direction = new THREE.Vector3();
        this.right = new THREE.Vector3();

        this.initEventListeners();
    }

    initEventListeners() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'KeyW': this.keys.w = true; break;
                case 'KeyA': this.keys.a = true; break;
                case 'KeyS': this.keys.s = true; break;
                case 'KeyD': this.keys.d = true; break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.code) {
                case 'KeyW': this.keys.w = false; break;
                case 'KeyA': this.keys.a = false; break;
                case 'KeyS': this.keys.s = false; break;
                case 'KeyD': this.keys.d = false; break;
            }
        });
    }

    update() {
        // カメラの方向ベクトルを計算
        this.camera.getWorldDirection(this.direction);
        this.direction.y = 0;  // Y軸は固定
        this.direction.normalize();

        this.right.crossVectors(this.camera.up, this.direction).normalize();

        // 移動処理
        if (this.keys.w) this.camera.position.addScaledVector(this.direction, this.moveSpeed);
        if (this.keys.s) this.camera.position.addScaledVector(this.direction, -this.moveSpeed);
        if (this.keys.a) this.camera.position.addScaledVector(this.right, this.moveSpeed);
        if (this.keys.d) this.camera.position.addScaledVector(this.right, -this.moveSpeed);
    }
}