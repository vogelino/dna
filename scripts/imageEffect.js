export function prepareImage(element) {
	const el1 = element.getElementsByTagName('span')[0];
	const el2 = insertAfter(el1.cloneNode(true), el1);
	const el3 = insertAfter(el1.cloneNode(true), el1);

	TweenMax.set( el1, { transformStyle: 'preserve-3d'  });
	TweenMax.set( el2, { transformStyle: 'preserve-3d'  });
	TweenMax.set( el3, { transformStyle: 'preserve-3d'  });

	return [el1, el2, el3];
}


export function getImageUpdater({
	elements,
	bodyHeight,
	bodyWidth
}) {
	const [el1, el2, el3] = elements;

	return (percentage = 0, props) => {
		const commonProps = {
			transformPerspective: 500,
			transformOrigin: 'center center'
		};
		TweenMax.to( el1, 1, Object.assign({}, commonProps,
			getXYZRotations({
				xMinMax: props.xMinMax,
				yMinMax: props.yMinMax,
				zMinMax: props.zMinMax,
				percentage,
			})
		));
		TweenMax.to( el2, 1, Object.assign({}, commonProps,
			getXYZRotations({
				xMinMax: [props.xMinMax[0] - 1, props.xMinMax[1] + 1],
				yMinMax: [props.yMinMax[0] - 1, props.yMinMax[1] + 1],
				zMinMax: [props.zMinMax[0] - 1, props.zMinMax[1] + 1],
				percentage,
			})
		));
		TweenMax.to( el3, 1, Object.assign({}, commonProps,
			getXYZRotations({
				xMinMax: [props.xMinMax[0] - 2, props.xMinMax[1] + 2],
				yMinMax: [props.yMinMax[0] - 2, props.yMinMax[1] + 2],
				zMinMax: [props.zMinMax[0] - 2, props.zMinMax[1] + 2],
				percentage,
			})
		));
	};
}

function getXYZRotations ({
	xMinMax,
	yMinMax,
	zMinMax,
	percentage
}) {
	const portion = percentage / 100;
	const rotationX = calculateRotation(xMinMax[0], xMinMax[1], portion);
	const rotationY = calculateRotation(yMinMax[0], yMinMax[1], portion);
	const rotationZ = calculateRotation(zMinMax[0], zMinMax[1], portion);
	return { rotationX, rotationY, rotationZ };
}

function calculateRotation(min, max, portion) {
	const distance = Math.abs(min) + Math.abs(max);
	const rotation = (distance * portion) + min;
	return rotation;
}

function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	return newNode;
}
