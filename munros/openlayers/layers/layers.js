var wms_layers = [];


        var lyr_BasemapOSM_0 = new ol.layer.Tile({
            'title': 'Basemap: OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Basemapterrain_1 = new ol.layer.Tile({
            'title': 'Basemap: terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=f53f44e2da9e4c15a3dc7ca35335740e'
            })
        });
var format_Scotland_2 = new ol.format.GeoJSON();
var features_Scotland_2 = format_Scotland_2.readFeatures(json_Scotland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scotland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scotland_2.addFeatures(features_Scotland_2);
var lyr_Scotland_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Scotland_2, 
                style: style_Scotland_2,
                interactive: false,
                title: '<img src="styles/legend/Scotland_2.png" /> Scotland'
            });
var format_NationalParks_3 = new ol.format.GeoJSON();
var features_NationalParks_3 = format_NationalParks_3.readFeatures(json_NationalParks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalParks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalParks_3.addFeatures(features_NationalParks_3);
var lyr_NationalParks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NationalParks_3, 
                style: style_NationalParks_3,
                interactive: true,
                title: '<img src="styles/legend/NationalParks_3.png" /> National Parks'
            });
var format_Routes_4 = new ol.format.GeoJSON();
var features_Routes_4 = format_Routes_4.readFeatures(json_Routes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_4.addFeatures(features_Routes_4);
var lyr_Routes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routes_4, 
                style: style_Routes_4,
                interactive: true,
                title: '<img src="styles/legend/Routes_4.png" /> Routes'
            });
var format_Munrosheightinmetres_5 = new ol.format.GeoJSON();
var features_Munrosheightinmetres_5 = format_Munrosheightinmetres_5.readFeatures(json_Munrosheightinmetres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Munrosheightinmetres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Munrosheightinmetres_5.addFeatures(features_Munrosheightinmetres_5);
var lyr_Munrosheightinmetres_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Munrosheightinmetres_5, 
                style: style_Munrosheightinmetres_5,
                interactive: true,
    title: 'Munros (height in metres)<br />\
    <img src="styles/legend/Munrosheightinmetres_5_0.png" /> 915 - 934<br />\
    <img src="styles/legend/Munrosheightinmetres_5_1.png" /> 934 - 958<br />\
    <img src="styles/legend/Munrosheightinmetres_5_2.png" /> 958 - 986<br />\
    <img src="styles/legend/Munrosheightinmetres_5_3.png" /> 986 - 1010<br />\
    <img src="styles/legend/Munrosheightinmetres_5_4.png" /> 1010 - 1049<br />\
    <img src="styles/legend/Munrosheightinmetres_5_5.png" /> 1049 - 1112<br />\
    <img src="styles/legend/Munrosheightinmetres_5_6.png" /> 1112 - 1345<br />'
        });
var format_Bothies_6 = new ol.format.GeoJSON();
var features_Bothies_6 = format_Bothies_6.readFeatures(json_Bothies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bothies_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bothies_6.addFeatures(features_Bothies_6);
var lyr_Bothies_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bothies_6, 
                style: style_Bothies_6,
                interactive: true,
                title: '<img src="styles/legend/Bothies_6.png" /> Bothies'
            });

lyr_BasemapOSM_0.setVisible(false);lyr_Basemapterrain_1.setVisible(true);lyr_Scotland_2.setVisible(false);lyr_NationalParks_3.setVisible(true);lyr_Routes_4.setVisible(true);lyr_Munrosheightinmetres_5.setVisible(true);lyr_Bothies_6.setVisible(true);
var layersList = [lyr_BasemapOSM_0,lyr_Basemapterrain_1,lyr_Scotland_2,lyr_NationalParks_3,lyr_Routes_4,lyr_Munrosheightinmetres_5,lyr_Bothies_6];
lyr_Scotland_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'AREA_CODE': 'AREA_CODE', 'DESCRIPTIO': 'DESCRIPTIO', 'FILE_NAME': 'FILE_NAME', 'NUMBER': 'NUMBER', 'NUMBER0': 'NUMBER0', 'POLYGON_ID': 'POLYGON_ID', 'UNIT_ID': 'UNIT_ID', 'CODE': 'CODE', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'TYPE_CODE': 'TYPE_CODE', 'DESCRIPT0': 'DESCRIPT0', 'TYPE_COD0': 'TYPE_COD0', 'DESCRIPT1': 'DESCRIPT1', });
lyr_NationalParks_3.set('fieldAliases', {'npark18nm': 'npark18nm', });
lyr_Routes_4.set('fieldAliases', {'name': 'name', });
lyr_Munrosheightinmetres_5.set('fieldAliases', {'Hill-bagging': 'Hill-bagging', 'Name': 'Name', 'Height (m)': 'Height (m)', 'Easting': 'Easting', 'Northing': 'Northing', 'Comments': 'Comments', 'Climbed': 'Climbed', 'Notes': 'Notes', 'DateClimbed': 'DateClimbed', 'PhotoHTML': 'PhotoHTML', 'PhotoURL': 'PhotoURL', 'lat': 'lat', 'lon': 'lon', });
lyr_Bothies_6.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Name': 'Name', 'Size': 'Size', 'MBA Link': 'MBA Link', 'Notes': 'Notes', });
lyr_Scotland_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'AREA_CODE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'FILE_NAME': 'TextEdit', 'NUMBER': 'TextEdit', 'NUMBER0': 'TextEdit', 'POLYGON_ID': 'TextEdit', 'UNIT_ID': 'TextEdit', 'CODE': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'TYPE_CODE': 'TextEdit', 'DESCRIPT0': 'TextEdit', 'TYPE_COD0': 'TextEdit', 'DESCRIPT1': 'TextEdit', });
lyr_NationalParks_3.set('fieldImages', {'npark18nm': 'TextEdit', });
lyr_Routes_4.set('fieldImages', {'name': 'TextEdit', });
lyr_Munrosheightinmetres_5.set('fieldImages', {'Hill-bagging': 'TextEdit', 'Name': 'TextEdit', 'Height (m)': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Comments': 'TextEdit', 'Climbed': 'TextEdit', 'Notes': 'TextEdit', 'DateClimbed': 'TextEdit', 'PhotoHTML': 'TextEdit', 'PhotoURL': 'Hidden', 'lat': 'Hidden', 'lon': 'Hidden', });
lyr_Bothies_6.set('fieldImages', {'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Name': 'TextEdit', 'Size': 'TextEdit', 'MBA Link': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Scotland_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'AREA_CODE': 'no label', 'DESCRIPTIO': 'no label', 'FILE_NAME': 'no label', 'NUMBER': 'no label', 'NUMBER0': 'no label', 'POLYGON_ID': 'no label', 'UNIT_ID': 'no label', 'CODE': 'no label', 'HECTARES': 'no label', 'AREA': 'no label', 'TYPE_CODE': 'no label', 'DESCRIPT0': 'no label', 'TYPE_COD0': 'no label', 'DESCRIPT1': 'no label', });
lyr_NationalParks_3.set('fieldLabels', {'npark18nm': 'no label', });
lyr_Routes_4.set('fieldLabels', {'name': 'no label', });
lyr_Munrosheightinmetres_5.set('fieldLabels', {'Hill-bagging': 'inline label', 'Name': 'inline label', 'Height (m)': 'inline label', 'Comments': 'inline label', 'Climbed': 'inline label', 'Notes': 'inline label', 'DateClimbed': 'inline label', 'PhotoHTML': 'inline label', });
lyr_Bothies_6.set('fieldLabels', {'Name': 'inline label', 'Size': 'inline label', 'MBA Link': 'inline label', 'Notes': 'inline label', });
lyr_Bothies_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});