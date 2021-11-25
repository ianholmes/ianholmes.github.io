var wms_layers = [];


        var lyr_StamenWatercolour_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolour',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_OSMstandard_1 = new ol.layer.Tile({
            'title': 'OSM standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_coastline_2 = new ol.format.GeoJSON();
var features_coastline_2 = format_coastline_2.readFeatures(json_coastline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coastline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coastline_2.addFeatures(features_coastline_2);
var lyr_coastline_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coastline_2, 
                style: style_coastline_2,
                interactive: false,
                title: '<img src="styles/legend/coastline_2.png" /> coastline'
            });
var format_contours_smoothed_3 = new ol.format.GeoJSON();
var features_contours_smoothed_3 = format_contours_smoothed_3.readFeatures(json_contours_smoothed_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_smoothed_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_smoothed_3.addFeatures(features_contours_smoothed_3);
var lyr_contours_smoothed_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contours_smoothed_3, 
                style: style_contours_smoothed_3,
                interactive: true,
    title: 'contours_smoothed<br />\
    <img src="styles/legend/contours_smoothed_3_0.png" /> index<br />\
    <img src="styles/legend/contours_smoothed_3_1.png" /> ordinary<br />\
    <img src="styles/legend/contours_smoothed_3_2.png" /> <br />'
        });
var format_spot_heights_4 = new ol.format.GeoJSON();
var features_spot_heights_4 = format_spot_heights_4.readFeatures(json_spot_heights_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spot_heights_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spot_heights_4.addFeatures(features_spot_heights_4);
var lyr_spot_heights_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_spot_heights_4, 
                style: style_spot_heights_4,
                interactive: false,
                title: '<img src="styles/legend/spot_heights_4.png" /> spot_heights'
            });

lyr_StamenWatercolour_0.setVisible(true);lyr_OSMstandard_1.setVisible(true);lyr_coastline_2.setVisible(true);lyr_contours_smoothed_3.setVisible(true);lyr_spot_heights_4.setVisible(true);
var layersList = [lyr_StamenWatercolour_0,lyr_OSMstandard_1,lyr_coastline_2,lyr_contours_smoothed_3,lyr_spot_heights_4];
lyr_coastline_2.set('fieldAliases', {'fid': 'fid', });
lyr_contours_smoothed_3.set('fieldAliases', {'fid': 'fid', 'height': 'height', 'type': 'type', });
lyr_spot_heights_4.set('fieldAliases', {'fid': 'fid', 'height': 'height', });
lyr_coastline_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_contours_smoothed_3.set('fieldImages', {'fid': 'TextEdit', 'height': 'Range', 'type': 'TextEdit', });
lyr_spot_heights_4.set('fieldImages', {'fid': 'TextEdit', 'height': 'Range', });
lyr_coastline_2.set('fieldLabels', {'fid': 'no label', });
lyr_contours_smoothed_3.set('fieldLabels', {'fid': 'no label', 'height': 'inline label', 'type': 'no label', });
lyr_spot_heights_4.set('fieldLabels', {'fid': 'no label', 'height': 'header label', });
lyr_spot_heights_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});