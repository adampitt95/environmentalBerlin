var config = {
    
    style: 'mapbox://styles/adampitt95/ckfkcuytq1a3o19pcu2361pt6',
    accessToken: 'pk.eyJ1IjoiYWRhbXBpdHQ5NSIsImEiOiJja2Y0OWs0aG8wYXhxMnNwamQ3d3YzNmRlIn0.Img_zsKX6l6r5bArH6KmNQ',
    
    theme: 'light',
    alignment: 'left',
    title: 'Toward the Datascape City',
    subtitle: 'Democritizing Air Data in Berlin',
    byline: 'ADAM JOHNSON',
    footer: 'Source: source citations, etc.',
    chapters: [
        
        {
            id: 'slug-style-id',
            title: 'Berlin',
            description: '',
            location: {
                speed: 1.6,
                center: [13.378, 52.5095],
                zoom: 14.32,
                pitch: 60,
                bearing: 84
            },
            
            onChapterEnter: [
                    {
                        
                        
                    }
            ],
            
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Introduction: Air Problems in Berlin',
            description: 'Air quality has long been a problem in Berlin. Since reunification, air pollution quality and monitoring have been a major focus for the citys governing senate.',
            location: {
                speed: 0.05,
                center: [13.402901, 52.511441],
                zoom: 15.32,
                pitch: 60,
                bearing: 84
            },
            
            onChapterEnter: [],
            onChapterExit: []
            
        },
        {
            id: 'air-problems',
            title: 'Falling Short',
            description: 'Although the city has made progress since reunification, it continues to fall short of its goals (as defined by the World Health Organizations healthy air standards.). In particular, the city has had problems with...',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    
                     
                }               
                
            ],
            onChapterExit: []
            
        },
        {
            id: 'nox',
            title: 'Nitrates',
            description: '...nitrogen-based pollutants, which primarily originate in excess from traffic;',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'no2',
                    opacity: 0.9,
                     
                }               
                
            ],
            onChapterExit: [
                {
                    layer: 'no2',
                    opacity: 0,
                }
            ]
            
        },
        {
            id: 'pm10',
            title: 'PM2.5',
            description: '...2.5nm particulate matter, although since reunification and the decline of manufacturing based industry in the region, these levels have improved;',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'pm25',
                    opacity: 0.9,
                     
                }               
                
            ],
            onChapterExit: [
                {
                    layer: 'pm25',
                    opacity: 0,
                }
            ]
            
        },
        {
            id: 'o3',
            title: 'PM10',
            description: '...and 10nm particulate matter. The city saw considerable improvement in its large particulate levels into the mid-2010s, but lately has experienced a backswing toward dangerous levels.',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'pm10',
                    opacity: 0.9,
                     
                }               
                
            ],
            onChapterExit: [
                {
                    layer: 'pm10',
                    opacity: 0,
                }
            ]
            
        },
        {
            id: 'BLUME',
            title: 'Monitoring Network',
            description: 'To monitor air-quality, the city uses an extensive network of 19 monitoring stations- the "Berlin Luftgütemessnetz" or "BLUME"- placed in strategic locations. Each station monitors a mix of NOX, PM10, and O3, in addition to many other less prominent pollutants. Each station is divided into one of three categories: background, traffic, and suburban, according to its primary role in the larger network. Each station reports data in one-hour intervals.',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'BLUMEdot',
                    opacity: 1,
                     
                },
                {
                    layer: 'BLUME',
                    opacity: 1,
                }
            
                
            ],
            onChapterExit: [
                {
                    layer: 'BLUMEdot',
                    opacity: 0,
                     
                },
                {
                    layer: 'BLUME',
                    opacity: 0,
                }
                
            ]
            
        },
        {
            id: 'RUBIS',
            title: 'Monitoring Network',
            description: 'Blume is supported by a larger network of low-cost samplers that monitor soot and benzene (RUBIS). These devices are analyzed in a lab every 14 days.',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    
                    layer: 'RUBISdot',
                    opacity: 1,
                     
                },
                {
                    layer: 'RUBIS',
                    opacity: 1,
                }
                     
                               
                
            ],
            onChapterExit: [
                {
                    layer: 'RUBISdot',
                    opacity: 0,
                     
                },
                {
                    layer: 'RUBIS',
                    opacity: 0,
                },
                {
                    layer: 'BLUMEdot',
                    opacity: 1,
                }
                
                
            ]
            
        },
        {
            id: 'start_zoom',
            title: '',
            description: 'Lets look at some of these stations.',
            location: {
                speed: 0.1,
                center: [13.345252, 52.506445],
                zoom: 14.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [           
                {
                    layer: 'building',
                    opacity: 0.75,
                }
            ],
            onChapterExit: []
            
        },
        {
            id: 'old_station',
            title: 'Wedding',
            description: 'Each station has a different specification. This is the oldest station in the network, and has been operating since 1984. It measures for PM10, NO, NO2, O3, CHB, and CHT. It is designated as a "background" station, meaning it attempts to measure general levels of pollution from all causes.',
            showMarkers: false,
            location: {
                speed: 0.5,
                center: [13.348651, 52.542923],
                zoom: 17,
                pitch: 60,
                bearing: 25
            },
            
            onChapterEnter: [
                {
                    
                     
                }               
                
            ],
            onChapterExit: []
            
        },
        
        {
            id: 'grass_station',
            title: 'other_network',
            description: 'This station in Buch is a "suburban" station, and monitors a less urban outskirt of the city.',
            location: {
                speed: 0.75,
                center: [13.478179, 52.64129],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    
                     
                }               
                
            ],
            onChapterExit: []
            
        },
        {
            id: 'newStation',
            title: 'Leipzigerstrasse',
            description: 'This station on Leipzigerstrasse is the newest station, having been installed in March of 2020. It is a traffic monitoring station, meaning that it tries to measure nitrate pollution due to traffic.',
            location: {
                speed: 0.75,
                center: [13.382771, 52.509913],
                zoom: 17,
                pitch: 60,
                bearing: 90 
            },
            
            onChapterEnter: [
                {
                    
                     
                }               
                
            ],
            onChapterExit: []
            
        },
        {
            id: 'supply',
            title: '',
            description: 'This network supplies data to the BLUME website at hourly intervals.',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'BLUMEdot',
                    opacity: 1,
                     
                },
                {
                    layer: 'RUBISdot',
                    opacity: 1,
                     
                },
                {
                    layer: 'BLUME',
                    opacity: 1,
                     
                },
                {
                    layer: 'RUBIS',
                    opacity: 1,
                     
                },
                
                
            ],
            onChapterExit: []
            
        },
        {
            id: 'algorithms',
            title: '',
            description: 'and a robust set of algorithms and neural networks are used to fill in the gaps between stations.',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'BLUMEdot',
                    opacity: 1,
                     
                },
                {
                    layer: 'RUBISdot',
                    opacity: 1,
                     
                },
                {
                    layer: 'BLUME',
                    opacity: 1,
                     
                },
                {
                    layer: 'RUBIS',
                    opacity: 1,
                     
                },
                {
                    layer: 'noStation',
                    opacity: 0.75,
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'BLUMEdot',
                    opacity: 0,
                     
                },
                {
                    layer: 'RUBISdot',
                    opacity: 0,
                     
                },
                {
                    layer: 'BLUME',
                    opacity: 0,
                     
                },
                {
                    layer: 'RUBIS',
                    opacity: 0,
                     
                },
                {
                    layer: 'noStation',
                    opacity: 0,
                }
            ]
            
        },
        {
            id: 'traffic',
            title: 'Traffic Problems',
            description: 'The primary pollutant chocking the city is nitrogren dioxide, which is primarily caused by diesel-based car engines. The city has invested heavily into measuring traffic flows...',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'traffic_e',
                    opacity: 1,
                     
                }               
                
            ],
            onChapterExit: [
                {
                    layer: 'traffic_e',
                    opacity: 0,
                }
            ]
            
        },
        {
            id: 'traffics',
            title: '',
            description: '...and has even created an environmental zone at the heart of the city, where high-emissions vehicles cannot drive.',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'eZone',
                    opacity: 0.75,                 
                },
                {
                    layer: 'traffic_e',
                    opacity: 1,
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'eZone',
                    opacity: 0,                 
                },
                {
                    layer: 'traffic_e',
                    opacity: 0,
                }
                
                
                
            ]
            
        },
         {
            id: 'karlmarx',
            title: 'Karl-Marx-Allee',
            description: 'Major boulevards in the heart of the city can be especially problematic, like this stretch of Karl-Marx-Allee, which is among the worst polluted stretches of road in the city. In a 2018 interview with DW.com, a woman walking on the street was quoted as saying "we all have to die sometime," in reference to the possible health effects of the pollution.',
            location: {
                speed: 0.75,
                center: [13.428045, 52.518398],
                zoom: 16.54,
                pitch: 60,
                bearing: 65.60
            },
            
            onChapterEnter: [
                {
                    layer: 'traffic_e',
                    opacity: 1,
                     
                },
                {
                    layer: 'building',
                    opacity: 0.75,
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'traffic_e',
                    opacity: 0,
                }
            ]
            
        },
        {
            id: 'better',
            title: 'Solutions',
            description: 'The city has enacted a comprehensive plan for reducing pollution, with aggressive targets set on a per-street basis for 2020 and 2025. ',
            location: {
                speed: 0.5,
                center: [13.428045, 52.518398],
                zoom: 17.54,
                pitch: 60,
                bearing: 65.60
            },
            
            onChapterEnter: [
                {
                    layer: 'traffic_e',
                    opacity: 0.5,
                     
                },
                {
                    layer: 'traffic_projection',
                    opacity: 1,
                },
                {
                    layer: 'building',
                    opacity: 0.75,
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'traffic_e',
                    opacity: 0,
                },
                {
                    layer: 'traffic_projection',
                    opacity: 0,
                }
            ]
            
        },
        {
            id: 'traffic2',
            title: 'However...',
            description: 'However, traffic-based pollution can be difficult to stop. The people who are disproportionately affected by it are those who live and work in the center of the city - who walk and take public transit - and who are often in-need populations.',
            location: {
                speed: 0.75,
                center: [13.395527, 52.501721],
                zoom: 17.74,
                pitch: 60,
                bearing: 65.60
            },
            
            onChapterEnter: [
                {
                    layer: 'status_risk',
                    opacity: 0.1,
                     
                }               
                
            ],
            onChapterExit: [
                {
                    layer: 'status_risk',
                    opacity: 0,
                }
                
            ]
            
        },
        {
            id: 'wealthy',
            title: '',
            description: '...while traffic is mostly caused by the wealthier populations who travel by car from the outskirts of the city, where the air is clearer and so it is easy to ignore the problem.',
            location: {
                speed: 0.75,
                center: [13.274038, 52.637499],
                zoom: 14.40,
                pitch: 60,
                bearing: 65.60
            },
            
            onChapterEnter: [
                {
                    layer: 'status_high',
                    opacity: 0.25,
                     
                },
                {
                    layer: 'status_risk',
                    opacity: 1,
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'status_high',
                    opacity: 0,
                },
                {
                    layer: 'status_risk',
                    opacity: 0,
                }
            ]
            
        },
         {
            id: 'last',
            title: 'Conclusion',
            description: 'And so wealthier districts - those in white - cause the problem but do not experience its effects, while poorer and denser districts - those in black - are disproportionately effected and do not have the power to fix it. ',
            location: {
                speed: 1,
                center: [13.345252, 52.506445],
                zoom: 10.19,
                pitch: 0,
                bearing: 0
            },
            
            onChapterEnter: [
                {
                    layer: 'status_risk',
                    opacity: 0.5,                 
                },
                {
                    layer: 'status_high',
                    opacity: 0.75,
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'status_risk',
                    opacity: 0,                 
                },
                {
                    layer: 'status_high',
                    opacity: 0,
                }
                
                
                
            ]
            
        },
    
    
    ]
};