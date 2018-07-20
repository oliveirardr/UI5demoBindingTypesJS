sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.treinamento.demoBindingTypesJS.controller.Root", {

		onInit: function(oEvent) {

			this._definirModeloLocalPadrao();

			this._definirBindingsViaControllerJS();

		},

		_definirBindingsViaControllerJS: function() {

			this._propertyBinding();

			this._elementBinding();

			this._aggregationBinding();

		},

		_aggregationBinding: function() {

			var oItemTemplate = this._definirTemplate();

			var oMultiCombo = this.byId("comboAggregationBinding");
			oMultiCombo.bindAggregation("items", "/vetor", oItemTemplate);

		},
		
		_definirTemplate: function(){
			return new sap.ui.core.Item({
				key: "{id}",
				text: "{texto}"
			}); 
		},

		_elementBinding: function() {

			var oPainel = this.byId("painelElementBinding");
			oPainel.bindElement("/objeto");

			var oInput = this.byId("inputElementBinding1");
			oInput.bindProperty("value", "propriedade1");
			oInput = this.byId("inputElementBinding2");
			oInput.bindProperty("value", "propriedade2");

		},

		_propertyBinding: function() {

			var oInput = this.byId("inputPropertyBinding1");

			oInput.bindProperty("value", "/texto"); //Criação do property binding entre a propriedade "value" do Input "inputPropertyBinding1" e a propriedade "/texto" do modelo

			oInput = this.byId("inputPropertyBinding2");

			oInput.bindProperty("value", "/objeto/propriedade1"); //Criação do property binding entre a propriedade "value" do Input "inputPropertyBinding2" e a propriedade "/objeto/propriedade1" do modelo

		},

		_definirModeloLocalPadrao: function() {

			var obj = {
				texto: "Texto Exemplo",
				objeto: {
					propriedade1: "Propriedade 1",
					propriedade2: 2
				},
				vetor: [{
					id: 1,
					texto: "Item 1"
				}, {
					id: 2,
					texto: "Item 2"
				}, {
					id: 3,
					texto: "Item 3"
				}]
			};

			var oLocalJSONModel = new JSONModel(obj);
			this.getView().setModel(oLocalJSONModel);
		}

	});
});