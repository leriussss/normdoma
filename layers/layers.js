var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_norm_doma_1 = new ol.format.GeoJSON();
var features_norm_doma_1 = format_norm_doma_1.readFeatures(json_norm_doma_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_norm_doma_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_norm_doma_1.addFeatures(features_norm_doma_1);
var lyr_norm_doma_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_norm_doma_1, 
                style: style_norm_doma_1,
                interactive: true,
                title: '<img src="styles/legend/norm_doma_1.png" /> norm_doma'
            });
var format_1lab1_2 = new ol.format.GeoJSON();
var features_1lab1_2 = format_1lab1_2.readFeatures(json_1lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1lab1_2.addFeatures(features_1lab1_2);
var lyr_1lab1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1lab1_2, 
                style: style_1lab1_2,
                interactive: true,
                title: '<img src="styles/legend/1lab1_2.png" /> квадрат1 — lab1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_norm_doma_1.setVisible(true);lyr_1lab1_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_norm_doma_1,lyr_1lab1_2];
lyr_norm_doma_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'capacity': 'capacity', 'smoking': 'smoking', 'wheelchair': 'wheelchair', 'payment:contactless': 'payment:contactless', 'payment:cards': 'payment:cards', 'check_date': 'check_date', 'addr:levels': 'addr:levels', 'healthcare': 'healthcare', 'payment:credit_cards': 'payment:credit_cards', 'payment:cash': 'payment:cash', 'description': 'description', 'name:ru': 'name:ru', 'brand:wikipedia': 'brand:wikipedia', 'brand:ru': 'brand:ru', 'religion': 'religion', 'denomination': 'denomination', 'addr:place': 'addr:place', 'brand:wikidata': 'brand:wikidata', 'brand:en': 'brand:en', 'brand': 'brand', 'addr:district': 'addr:district', 'tourism': 'tourism', 'internet_access': 'internet_access', 'fax': 'fax', 'email': 'email', 'shop': 'shop', 'phone': 'phone', 'energy_class': 'energy_class', 'building:levels:underground': 'building:levels:underground', 'building:flats': 'building:flats', 'roof:shape': 'roof:shape', 'leisure': 'leisure', 'fuel:lpg': 'fuel:lpg', 'preschool': 'preschool', 'man_made': 'man_made', 'height': 'height', 'name:ja': 'name:ja', 'name:en': 'name:en', 'layer': 'layer', 'substation': 'substation', 'start_date': 'start_date', 'power': 'power', 'building:levels': 'building:levels', 'website': 'website', 'operator': 'operator', 'opening_hours': 'opening_hours', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_92': 'fuel:octane_92', 'fuel:diesel': 'fuel:diesel', 'aeroway': 'aeroway', 'addr:housenumber': 'addr:housenumber', 'type': 'type', 'name': 'name', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:region': 'addr:region', 'addr:postcode': 'addr:postcode', 'addr:country': 'addr:country', 'addr:city': 'addr:city', });
lyr_1lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_norm_doma_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'capacity': '', 'smoking': '', 'wheelchair': '', 'payment:contactless': '', 'payment:cards': '', 'check_date': '', 'addr:levels': '', 'healthcare': '', 'payment:credit_cards': '', 'payment:cash': '', 'description': '', 'name:ru': '', 'brand:wikipedia': '', 'brand:ru': '', 'religion': '', 'denomination': '', 'addr:place': '', 'brand:wikidata': '', 'brand:en': '', 'brand': '', 'addr:district': '', 'tourism': '', 'internet_access': '', 'fax': '', 'email': '', 'shop': '', 'phone': '', 'energy_class': '', 'building:levels:underground': '', 'building:flats': '', 'roof:shape': '', 'leisure': '', 'fuel:lpg': '', 'preschool': '', 'man_made': '', 'height': '', 'name:ja': '', 'name:en': '', 'layer': '', 'substation': '', 'start_date': '', 'power': '', 'building:levels': '', 'website': '', 'operator': '', 'opening_hours': '', 'fuel:octane_95': '', 'fuel:octane_92': '', 'fuel:diesel': '', 'aeroway': '', 'addr:housenumber': '', 'type': '', 'name': '', 'amenity': '', 'addr:street': '', 'addr:region': '', 'addr:postcode': '', 'addr:country': '', 'addr:city': '', });
lyr_1lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_norm_doma_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'capacity': 'no label', 'smoking': 'no label', 'wheelchair': 'no label', 'payment:contactless': 'no label', 'payment:cards': 'no label', 'check_date': 'no label', 'addr:levels': 'no label', 'healthcare': 'no label', 'payment:credit_cards': 'no label', 'payment:cash': 'no label', 'description': 'no label', 'name:ru': 'no label', 'brand:wikipedia': 'no label', 'brand:ru': 'no label', 'religion': 'no label', 'denomination': 'no label', 'addr:place': 'no label', 'brand:wikidata': 'no label', 'brand:en': 'no label', 'brand': 'no label', 'addr:district': 'no label', 'tourism': 'no label', 'internet_access': 'no label', 'fax': 'no label', 'email': 'no label', 'shop': 'no label', 'phone': 'no label', 'energy_class': 'no label', 'building:levels:underground': 'no label', 'building:flats': 'no label', 'roof:shape': 'no label', 'leisure': 'no label', 'fuel:lpg': 'no label', 'preschool': 'no label', 'man_made': 'no label', 'height': 'no label', 'name:ja': 'no label', 'name:en': 'no label', 'layer': 'no label', 'substation': 'no label', 'start_date': 'no label', 'power': 'no label', 'building:levels': 'no label', 'website': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_92': 'no label', 'fuel:diesel': 'no label', 'aeroway': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:region': 'no label', 'addr:postcode': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', });
lyr_1lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_1lab1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});