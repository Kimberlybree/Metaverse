const ratio = window.innerWidth / window.innerHeight;
		const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, ratio, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

            const light = new THREE.AmbientLight(0xffffff);
            const dLight = new THREE.DirectionalLight(0xffffff, 0.5);

            light.add(dLight);
            scene.add(light);

			const geometry = new THREE.BoxGeometry(50, 0.1, 50);
			const material = new THREE.MeshPhongMaterial( { color: 0xffffff} );
			const ground = new THREE.Mesh( geometry, material );

			scene.add(ground);
            camera.position.set(5, 15, 15);


			const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
			const boxMaterial = new THREE.MeshPhongMaterial( { color: 0xffff} );
			const box = new THREE.Mesh( boxGeometry, boxMaterial );

            scene.add(box);

			function animate() {
        

                requestAnimationFrame( animate );
                camera.lookAt(ground.position);
				renderer.render( scene, camera );
			};

			animate();