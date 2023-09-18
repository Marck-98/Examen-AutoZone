Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"AutoZone","publishDate":"18/09/2023 10:59:01","pages":[{"id":"5a43e23f-1359-46b6-8626-f02e4c9a36d0","name":"BMPN AutoZone","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:#FFFFFF;font-family:Arial;font-size:11pt;font-weight:normal;font-style:normal;\">El diagrama BMPN del proceso de negocios de la tienda de autoservicios AutoZone, desde que el cliente selecciona sus productos, los deposita en el carrito, hasta que paga sus productos por distintos tipos de pago.</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p>","version":"1.0","author":"Marcos Velazquez","image":"files\\diagrams\\BMPN AutoZone.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"4048f589-e339-4cd4-b23b-d94ec3006a4a","name":"Tienda AutoZone","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":473.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"a97d2f7f-0af7-4d61-ad8a-5817ccf6e1e0","name":"Seleccionar productos.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente examina y elige los productos de inter&eacute;s</span><a name=\"_dx_frag_EndFragment\"></a></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":200.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"68cad4ad-e8e0-4584-8249-3574c11e32c3","name":"Colocar el producto al carrito.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Coloca el cliente el producto</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> de un estante y lo deposita en un carrito.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":340.0,"y":119.0}],"radius":0.0,"height":78.0,"width":109.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"ec25f0bf-0bb1-4c26-9373-bbace40e42f7","name":"Pasar a la caja.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Pasar a la caja</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> con los productos que desea comprar el cliente.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":480.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"2a391f12-ddb1-4691-a3bf-b0e89aa98b41","name":"Registrar los productos.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Los productos seleccionados por el cliente se escanean o ingresan manualmente en el sistema de la tienda.</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":733.0,"y":320.0}],"radius":0.0,"height":77.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"1c0b82b2-ee39-447d-82f1-1e0a91e7fe1f","name":"Indicar el monto a pagar.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Se le presenta al cliente el total a pagar.</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":884.0,"y":325.0}],"radius":0.0,"height":68.0,"width":101.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"b4e65349-6e15-4632-bc1f-5bc5e6f8be11","name":"Indicar el método de pago.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Indicar el m&eacute;todo de pago</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> al cliente para pagar por los productos seleccionados.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1069.0,"y":319.0}],"radius":0.0,"height":80.0,"width":112.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"8c387b97-baf4-46c0-96f5-e0f4aebfdc6d","name":"Método de pago","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El m&eacute;todo de pago es la forma elegida por un cliente para pagar la compra la cual puede ser en efectivo, tarjeta de cr&eacute;dito o d&eacute;bito</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1080.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"6b6a0a7b-4670-4595-93b4-b28dfd220d5c","name":"Realizar el pago.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente efect&uacute;a el pago de dinero utilizando un m&eacute;todo de pago</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1333.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"b518465a-64ae-4986-ade8-447270b3fa09","name":"Procesar pago.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Esto implica la verificaci&oacute;n y autorizaci&oacute;n, donde se valida la autenticidad de los detalles de pago proporcionados por el cliente. </span><a name=\"_dx_frag_EndFragment\"></a></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":1333.0,"y":329.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","elementSubType":"ScriptTask","properties":[]},{"id":"39075cf0-968c-4e7f-97ae-41812b4a7182","name":"Dar el producto.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Se proporciona los productos al cliente, quien puede llevarlos consigo de inmediato.</span><a name=\"_dx_frag_EndFragment\"></a></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1551.0,"y":329.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"cebe8a6e-b01a-421d-b06f-8a5a38d8dc9c","name":"Recibir producto.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente obtiene los art&iacute;culos que ha adquirido</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1551.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"3c6ccb4b-6629-4a57-984c-b16cdee68d65","name":"Salir de la tienda.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente se aleja del establecimiento con sus compras y completa su interacci&oacute;n con la tienda.</span><a name=\"_dx_frag_EndFragment\"></a></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1749.0,"y":123.0}],"radius":0.0,"height":69.0,"width":103.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]}]}],"subPages":[{"id":"8c387b97-baf4-46c0-96f5-e0f4aebfdc6d","name":"Método de pago","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El m&eacute;todo de pago es la forma elegida por un cliente para pagar la compra la cual puede ser en efectivo, tarjeta de cr&eacute;dito o d&eacute;bito</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">. </span></p>","image":"files\\diagrams\\Metodo de pago.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[{"id":"50e41bcc-d39f-4adb-9a7f-9fa6c66edea3","name":"Seleccionar el método de pago.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente elige c&oacute;mo desea liquidar la transacci&oacute;n.</span><a name=\"_dx_frag_EndFragment\"></a></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":96.0,"y":33.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"c9aefaf0-8f97-494a-8629-bace3310f202","name":"¿El pago es?","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El pago puede ser instant&aacute;neo o programado seg&uacute;n el m&eacute;todo elegido</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":236.0,"y":43.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","elementSubType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Efectivo.","elementType":"SequenceFlow","properties":[]},{"name":"Tarjeta de crédito o débito.","elementType":"SequenceFlow","properties":[]}]},{"id":"dacf3745-8893-4ab1-94a3-df6061d97743","name":"Efectivo.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente eligio el pago en billetes y monedas, ampliamente aceptada como medio de pago en transacciones</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":381.0,"y":33.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"317c4d2f-608f-4be3-bf4f-7a745a764e4a","name":"Tarjeta de crédito o débito.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Las tarjetas est&aacute;n vinculadas directamente a una cuenta bancaria y permiten a los clientes realizar pago</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">s.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":211.0,"y":185.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]}],"parentRef":"5a43e23f-1359-46b6-8626-f02e4c9a36d0"},{"id":"a97d2f7f-0af7-4d61-ad8a-5817ccf6e1e0","name":"Seleccionar productos.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente examina y elige los productos de inter&eacute;s</span><a name=\"_dx_frag_EndFragment\"></a></p>","image":"files\\diagrams\\Seleccionar productos.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[{"id":"a241d0ae-4e0b-498b-a1aa-d373d12587db","name":"Visualizar producto.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Observar detenidamente un art&iacute;culo disponible para su compra.</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":127.0,"y":41.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"e4cc21c6-c62b-4df9-a73f-106edfeb0ebc","name":"Agarrar el producto.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Este proceso implica extender la mano y tomar el art&iacute;culo de un estante</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":265.0,"y":41.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"3f26839a-7ab9-4482-b7a5-45f33b3e1940","name":"¿Se tiene todos los productos?","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Pregunta esencial durante el proceso de compra, ya que implica la verificaci&oacute;n de que se han reunido todos los art&iacute;culos deseados antes de finalizar la transacci&oacute;n</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":443.0,"y":51.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","elementSubType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Si","elementType":"SequenceFlow","properties":[]}]},{"id":"394f3461-6db8-4c6a-92e7-8baa2089b286","name":"Elegir otro producto.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Implica el proceso de buscar y seleccionar un art&iacute;culo adicional despu&eacute;s de haber seleccionado uno previamente o varios.</span><a name=\"_dx_frag_EndFragment\"></a></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":418.0,"y":197.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]}],"parentRef":"5a43e23f-1359-46b6-8626-f02e4c9a36d0"}]}],"texts":{"tableOfContents":"Tabla de Contenidos","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versión","author":"Autor","description":"Descripción","mainPool":"Proceso principal","mainPoolDescription":"Proceso principal Descripción","processDiagrams":"Diagramas de Proceso","processElements":"Elementos del proceso","elements":"Elementos del proceso","defaultElementName":"Elemento","performers":"Ejecutantes","accountable":"Responsable","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Home","search":"Buscar","goToParentProcess":"Ir al proceso padre","calledBy":"Llamado por","attachmentsTooltip":"Ver adjuntos","visitBizagi":"Visite bizagi.com","contains":"Contiene {0} Subprocesos","showAll":"Ver todo","fullScreen":"Pantalla completa","zoomIn":"Acercar","zoomOut":"Alejar","close":"Cerrar","menu":"Menu: ","errorPage":"Error al visualizar la página","process":"Proceso","subProcess":"Subprocesos publicados","contain":"Contiene","checkAttributes":"Ver atributos","checkOverview":"Ver resumen","unavailableResource":"El recurso no esta disponible","localResource":"El recurso puede accederse localmente","performer":"Ejecutante","linktoimage":"Hipervínculo a imagen","presentationAction":"Acciones de presentación","searchGlobal":"Buscar todo","searchLocal":"Buscar en este proceso","searchResults":"No se encontraron resultados","titlePage":"Inicio","emptyElement":"Este elemento aún no se ha documentado","unsupported":"Su navegador no soporta contenido mostrado en esta página. <br> Le recomendamos actualizar su navegador.","details":"Detalles","viewDetails":"Ver detalles","expand":"Expandir","mainPoolProperties":"Propiedades Proceso principal","cannotVisualize":"No es posible visualizar correctamente","resourceNotFound":"No se encontró el recurso solicitado:","applyTheme":"Aplicando el tema","showMore":"Ver mas","showLess":"Ver menos","hideDescription":"Ocultar descripción","showDescription":"Mostrar descripción","presentationActionLink":"Ver acción de presentación","goToLinkThrow":"Ir al evento de destino","goToLinkCatch":"Ir al evento de origen","goToSubProcess":"Ir al subproceso","viewByList":"Lista de procesos","viewByTree":"Jerarquía de procesos","diagramList":"Lista de procesos","folderTree":"Jerarquía de procesos"},"searchMap":[{"containerId":"5a43e23f-1359-46b6-8626-f02e4c9a36d0","containerName":"BMPN AutoZone","isSubprocess":false,"elements":[{"id":"4048f589-e339-4cd4-b23b-d94ec3006a4a","value":"Tienda AutoZone"},{"id":"842c8370-cd5f-43b7-94c9-47560456fc4e","value":"Cliente"},{"id":"fafa797d-8b88-42de-bfda-a9efaef36ca3","value":"Cajero"},{"id":"04fd1df6-365c-44c3-8da6-8fd24cbdd52b","value":"Comprador en el establecimiento"},{"id":"3d0d5908-1e10-414b-b4e6-825ace70565e","value":"Fase de cobro de los productos"},{"id":"1905bcf4-51e8-490e-8a8f-0416092f820b","value":"Fase de obtención de los productos"},{"id":"c3baa6f5-7710-4ac4-92b5-dbba9abe10f7","value":"Inicio."},{"id":"d667e3ef-ce1b-47c8-af6b-99f03d3fe817","value":"Fin."},{"id":"a97d2f7f-0af7-4d61-ad8a-5817ccf6e1e0","value":"Seleccionar productos."},{"id":"8c387b97-baf4-46c0-96f5-e0f4aebfdc6d","value":"Método de pago"},{"id":"2a391f12-ddb1-4691-a3bf-b0e89aa98b41","value":"Registrar los productos."},{"id":"68cad4ad-e8e0-4584-8249-3574c11e32c3","value":"Colocar el producto al carrito."},{"id":"ec25f0bf-0bb1-4c26-9373-bbace40e42f7","value":"Pasar a la caja."},{"id":"1c0b82b2-ee39-447d-82f1-1e0a91e7fe1f","value":"Indicar el monto a pagar."},{"id":"b4e65349-6e15-4632-bc1f-5bc5e6f8be11","value":"Indicar el método de pago."},{"id":"6b6a0a7b-4670-4595-93b4-b28dfd220d5c","value":"Realizar el pago."},{"id":"39075cf0-968c-4e7f-97ae-41812b4a7182","value":"Dar el producto."},{"id":"b518465a-64ae-4986-ade8-447270b3fa09","value":"Procesar pago."},{"id":"cebe8a6e-b01a-421d-b06f-8a5a38d8dc9c","value":"Recibir producto."},{"id":"3c6ccb4b-6629-4a57-984c-b16cdee68d65","value":"Salir de la tienda."},{"id":"05d82e4b-b967-4012-8781-00ed9dc4f830"},{"id":"97a4db95-52a4-4c2e-af34-f030782cb691"}]}]}