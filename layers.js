var wms_layers = [];

var format_KEN_water_areas_dcw_0 = new ol.format.GeoJSON();
var features_KEN_water_areas_dcw_0 = format_KEN_water_areas_dcw_0.readFeatures(json_KEN_water_areas_dcw_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEN_water_areas_dcw_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEN_water_areas_dcw_0.addFeatures(features_KEN_water_areas_dcw_0);
var lyr_KEN_water_areas_dcw_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KEN_water_areas_dcw_0, 
                style: style_KEN_water_areas_dcw_0,
                interactive: true,
                title: '<img src="styles/legend/KEN_water_areas_dcw_0.png" /> KEN_water_areas_dcw'
            });

lyr_KEN_water_areas_dcw_0.setVisible(true);
var layersList = [lyr_KEN_water_areas_dcw_0];
lyr_KEN_water_areas_dcw_0.set('fieldAliases', {'ISO': 'ISO', 'COUNTRY': 'COUNTRY', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAME': 'NAME', });
lyr_KEN_water_areas_dcw_0.set('fieldImages', {'ISO': 'TextEdit', 'COUNTRY': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KEN_water_areas_dcw_0.set('fieldLabels', {'ISO': 'no label', 'COUNTRY': 'no label', 'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAME': 'no label', });
lyr_KEN_water_areas_dcw_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});