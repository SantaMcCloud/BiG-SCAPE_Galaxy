var run_data={
    "duration":"1h12m19s",
    "end_time":"31/01/2024 15:28:07",
    "input":{
        "accession":[
            {
                "id":"genome_0",
                "label":"GCA_000085225.1_ASM8522v1_genomic"
            },
            {
                "id":"genome_1",
                "label":"Pyrococcus horikoshii OT3"
            },
            {
                "id":"genome_2",
                "label":"Candidatus Prometheoarchaeum syntrophicum"
            }
        ],
        "accession_newick":[],
        "bgc":[
            {
                "acc":0,
                "class":0,
                "id":"GCA_000085225.1_ASM8522v1_genomic"
            },
            {
                "acc":1,
                "class":1,
                "id":"GCF_000011105.1"
            },
            {
                "acc":2,
                "class":0,
                "id":"GCF_008000775.1"
            }
        ],
        "classes":[
            {
                "label":"Others"
            },
            {
                "label":"RiPPs"
            }
        ]
    },
    "networks":[
        {
            "families":[
                {
                    "label":"FAM_01390",
                    "members":[
                        0
                    ],
                    "mibig":[]
                },
                {
                    "label":"FAM_01392",
                    "members":[
                        2
                    ],
                    "mibig":[]
                }
            ],
            "families_similarity":[
                [
                    [
                        1.0,
                        [
                            1.0,
                            1390,
                            1390
                        ],
                        [
                            1.0,
                            1390,
                            1390
                        ]
                    ]
                ],
                [
                    [
                        0.07872211933135986,
                        [
                            0.07872211933135986,
                            1390,
                            1392
                        ],
                        [
                            0.07872211933135986,
                            1390,
                            1392
                        ]
                    ],
                    [
                        1.0,
                        [
                            1.0,
                            1392,
                            1392
                        ],
                        [
                            1.0,
                            1392,
                            1392
                        ]
                    ]
                ]
            ],
            "label":"Others"
        }
    ],
    "parameters":"-i ../../BiG-SCAPE/input/ -o ../../BiG-SCAPE_Galaxy/mibig_with_input/ --pfam_dir ../../BiG-SCAPE/pfam/ --include_gbk_str G --mibig13",
    "start_time":"31/01/2024 14:15:48"
};
dataLoaded();