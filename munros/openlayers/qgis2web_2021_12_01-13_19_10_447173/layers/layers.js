var wms_layers = [];


        var lyr_ThunderforestLandscape_0 = new ol.layer.Tile({
            'title': 'Thunderforest Landscape',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=f53f44e2da9e4c15a3dc7ca35335740e'
            })
        });
var format_Bothies_1 = new ol.format.GeoJSON();
var features_Bothies_1 = format_Bothies_1.readFeatures(json_Bothies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bothies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bothies_1.addFeatures(features_Bothies_1);
var lyr_Bothies_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bothies_1, 
                style: style_Bothies_1,
                interactive: true,
                title: '<img src="styles/legend/Bothies_1.png" /> Bothies'
            });
var format_Notclimbedfiltered_2 = new ol.format.GeoJSON();
var features_Notclimbedfiltered_2 = format_Notclimbedfiltered_2.readFeatures(json_Notclimbedfiltered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Notclimbedfiltered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Notclimbedfiltered_2.addFeatures(features_Notclimbedfiltered_2);
var lyr_Notclimbedfiltered_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Notclimbedfiltered_2, 
                style: style_Notclimbedfiltered_2,
                interactive: true,
                title: '<img src="styles/legend/Notclimbedfiltered_2.png" /> Not climbed (filtered)'
            });
var format_Climbedfiltered_3 = new ol.format.GeoJSON();
var features_Climbedfiltered_3 = format_Climbedfiltered_3.readFeatures(json_Climbedfiltered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climbedfiltered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climbedfiltered_3.addFeatures(features_Climbedfiltered_3);
var lyr_Climbedfiltered_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Climbedfiltered_3, 
                style: style_Climbedfiltered_3,
                interactive: true,
                title: '<img src="styles/legend/Climbedfiltered_3.png" /> Climbed (filtered)'
            });

lyr_ThunderforestLandscape_0.setVisible(true);lyr_Bothies_1.setVisible(true);lyr_Notclimbedfiltered_2.setVisible(true);lyr_Climbedfiltered_3.setVisible(true);
var layersList = [lyr_ThunderforestLandscape_0,lyr_Bothies_1,lyr_Notclimbedfiltered_2,lyr_Climbedfiltered_3];
lyr_Bothies_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Name': 'Name', 'Size': 'Size', 'MBA Link': 'MBA Link', 'Notes': 'Notes', });
lyr_Notclimbedfiltered_2.set('fieldAliases', {'fid': 'fid', 'Running No': 'Running No', 'DoBIH Number': 'DoBIH Number', 'Streetmap': 'Streetmap', 'Geograph': 'Geograph', 'Hill-bagging': 'Hill-bagging', 'Name': 'Name', 'SMC Section': 'SMC Section', 'RHB Section': 'RHB Section', 'Height (m)': 'Height (m)', 'Height (ft)': 'Height (ft)', 'Map 1:50k': 'Map 1:50k', 'Map 1:25k': 'Map 1:25k', 'Grid Ref': 'Grid Ref', 'GridRefXY': 'GridRefXY', 'xcoord': 'xcoord', 'ycoord': 'ycoord', '1891': '1891', '1921': '1921', '1933': '1933', '1953': '1953', '1969': '1969', '1974': '1974', '1981': '1981', '1984': '1984', '1990': '1990', '1997': '1997', '2021': '2021', 'Comments': 'Comments', 'Climbed': 'Climbed', 'Notes': 'Notes', 'DateClimbed': 'DateClimbed', });
lyr_Climbedfiltered_3.set('fieldAliases', {'fid': 'fid', 'Running No': 'Running No', 'DoBIH Number': 'DoBIH Number', 'Streetmap': 'Streetmap', 'Geograph': 'Geograph', 'Hill-bagging': 'Hill-bagging', 'Name': 'Name', 'SMC Section': 'SMC Section', 'RHB Section': 'RHB Section', 'Height (m)': 'Height (m)', 'Height (ft)': 'Height (ft)', 'Map 1:50k': 'Map 1:50k', 'Map 1:25k': 'Map 1:25k', 'Grid Ref': 'Grid Ref', 'GridRefXY': 'GridRefXY', 'xcoord': 'xcoord', 'ycoord': 'ycoord', '1891': '1891', '1921': '1921', '1933': '1933', '1953': '1953', '1969': '1969', '1974': '1974', '1981': '1981', '1984': '1984', '1990': '1990', '1997': '1997', '2021': '2021', 'Comments': 'Comments', 'Climbed': 'Climbed', 'Notes': 'Notes', 'DateClimbed': 'DateClimbed', });
lyr_Bothies_1.set('fieldImages', {'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Name': 'TextEdit', 'Size': 'TextEdit', 'MBA Link': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Notclimbedfiltered_2.set('fieldImages', {'fid': 'Hidden', 'Running No': 'Hidden', 'DoBIH Number': 'Hidden', 'Streetmap': 'Hidden', 'Geograph': 'Hidden', 'Hill-bagging': 'TextEdit', 'Name': 'TextEdit', 'SMC Section': 'Hidden', 'RHB Section': 'Hidden', 'Height (m)': 'TextEdit', 'Height (ft)': 'Range', 'Map 1:50k': 'TextEdit', 'Map 1:25k': 'TextEdit', 'Grid Ref': 'Hidden', 'GridRefXY': 'Hidden', 'xcoord': 'Range', 'ycoord': 'Range', '1891': 'Hidden', '1921': 'Hidden', '1933': 'Hidden', '1953': 'Hidden', '1969': 'Hidden', '1974': 'Hidden', '1981': 'Hidden', '1984': 'Hidden', '1990': 'Hidden', '1997': 'Hidden', '2021': 'Hidden', 'Comments': 'TextEdit', 'Climbed': 'TextEdit', 'Notes': 'TextEdit', 'DateClimbed': 'DateTime', });
lyr_Climbedfiltered_3.set('fieldImages', {'fid': 'Hidden', 'Running No': 'Hidden', 'DoBIH Number': 'Hidden', 'Streetmap': 'Hidden', 'Geograph': 'Hidden', 'Hill-bagging': 'TextEdit', 'Name': 'TextEdit', 'SMC Section': 'Hidden', 'RHB Section': 'Hidden', 'Height (m)': 'TextEdit', 'Height (ft)': 'Range', 'Map 1:50k': 'TextEdit', 'Map 1:25k': 'TextEdit', 'Grid Ref': 'Hidden', 'GridRefXY': 'Hidden', 'xcoord': 'Range', 'ycoord': 'Range', '1891': 'Hidden', '1921': 'Hidden', '1933': 'Hidden', '1953': 'Hidden', '1969': 'Hidden', '1974': 'Hidden', '1981': 'Hidden', '1984': 'Hidden', '1990': 'Hidden', '1997': 'Hidden', '2021': 'Hidden', 'Comments': 'TextEdit', 'Climbed': 'TextEdit', 'Notes': 'TextEdit', 'DateClimbed': 'DateTime', });
lyr_Bothies_1.set('fieldLabels', {'Name': 'inline label', 'Size': 'inline label', 'MBA Link': 'inline label', 'Notes': 'inline label', });
lyr_Notclimbedfiltered_2.set('fieldLabels', {'Hill-bagging': 'no label', 'Name': 'inline label', 'Height (m)': 'inline label', 'Height (ft)': 'inline label', 'Map 1:50k': 'inline label', 'Map 1:25k': 'inline label', 'xcoord': 'inline label', 'ycoord': 'inline label', 'Comments': 'inline label', 'Climbed': 'inline label', 'Notes': 'inline label', 'DateClimbed': 'inline label', });
lyr_Climbedfiltered_3.set('fieldLabels', {'Hill-bagging': 'no label', 'Name': 'inline label', 'Height (m)': 'inline label', 'Height (ft)': 'inline label', 'Map 1:50k': 'inline label', 'Map 1:25k': 'inline label', 'xcoord': 'inline label', 'ycoord': 'inline label', 'Comments': 'inline label', 'Climbed': 'inline label', 'Notes': 'inline label', 'DateClimbed': 'inline label', });
lyr_Climbedfiltered_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});