const sequelize = require('./db');

const { DataTypes } = require('sequelize');

const Fournisseur = sequelize.define('fournisseur', {
    id_four: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_four'
    },
    nom_four: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "nom_four"
    },
    adresse_four: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'adresse_four'
    },
    tel_four: {
        type: DataTypes.STRING(10),
        allowNull: false,
        field: 'tel_four'
    }
});

const BL = sequelize.define('bl', {
    id_bl: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_bl"
    },
    date_livraison: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_livraison"
    },
    details_livraison: {
        type: DataTypes.STRING(255),
        field: "details_livraison"
    }
});

const BS = sequelize.define('bs', {
    id_bs: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_bs"
    },
    date_sortie: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_sortie"
    },
    details_sortie: {
        type: DataTypes.STRING(255),
        field: "details_sortie"
    }
});

const BE = sequelize.define('be', {
    id_be: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_be"
    },
    date_entree: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_entree"
    },
    details_entree: {
        type: DataTypes.STRING(255),
        field: "details_entree"
    },
    code_seaal: {
        type: DataTypes.INTEGER,
        field: "code_seaal"
    }
});

const Reparation = sequelize.define('reparation', {
    id_rep: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_rep"
    },
    date_rep: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_rep"
    },
    cout_rep: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
        field: "cout_rep"
    },
    desc_rep: {
        type: DataTypes.STRING(255),
        field: "desc_rep"
    }
});

const Piece = sequelize.define('piece', {
    id_piece: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_piece"
    },
    design_piece: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "design_piece"
    },
    desc_piece: {
        type: DataTypes.STRING(255),
        field: "desc_piece"
    },
    pu: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
        field: "pu"
    }
});

const RepPiece = sequelize.define('rep_piece', {
    id_rep: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_rep"
    },
    design_piece: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "design_piece"
    },
    num_serie: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "num_serie"
    },
    prix_rep: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
        field: "prix_rep"
    }
});

const Equipement = sequelize.define('equipement', {
    id_equip: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_equip"
    },
    design_equip: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "design_equip"
    },
    num_serie: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "num_serie"
    },
    prix_equip: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
        field: "prix_equip"
    }
});

const Inventaire = sequelize.define('inventaire', {
    id_inv: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_inv"
    },
    date_inv: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_inv"
    },
    qte_inv: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field: "qte_inv"
    }
});

const InvMat = sequelize.define('inv_mat', {
    id_inv: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "id_inv",
        references: {
            model: 'inventaire',
            key: 'id_inv'
        }
    },
    code_seaal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "code_seaal",
        references: {
            model: 'materiel',
            key: 'code_seaal'
        }
    }
});

const Modele = sequelize.define('modele', {
    id_mod: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_mod"
    },
    design_modele: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "design_modele"
    }
});

const Marque = sequelize.define('marque', {
    id_mar: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_mar"
    },
    design_marque: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "design_marque"
    }
});

const Decharge = sequelize.define('decharge', {
    id_dech: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_dech"
    },
    date_dech: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_dech"
    }
});

const Utilisateur = sequelize.define("utilisateur", {
    id_util: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_util"
    },
    nom_util: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "nom_util"
    },
    prenom_util: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "prenom_util"
    },
    dn_util: {
        type: DataTypes.DATE,
        field: "dn_util"
    },
    tel_util: {
        type: DataTypes.STRING(10),
        allowNull: false,
        field: "tel_util"
    },
    email_util: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "email_util"
    },
    password_util: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "password_util"
    },
    status_util: {
        type: DataTypes.STRING(12), // Changement du type de données en BOOLEAN
        allowNull: false,
        field: "status_util",
        defaultValue: false // Valeur par défaut indiquant que l'utilisateur n'est pas connecté
    },
    poste_util: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "poste_util"
    },
    departement_util: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "departement_util"
    },
    date_creation_util: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_creation_util"
    },
    role_util: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'role_util'
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "username"
    }
}
);

const FicheAffectation = sequelize.define('fiche_affectation', {
    id_aff: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date_debut_affec: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_fin_affec: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

const DemRef = sequelize.define('dem_ref', {
    id_dem_ref: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date_dem_ref: {
        type: DataTypes.DATE,
        allowNull: false
    },
    motif_dem_ref: {
        type: DataTypes.STRING(225),
        allowNull: false
    }
});

const PVRef = sequelize.define('pv_ref', {
    id_pv: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date_pv_ref: {
        type: DataTypes.DATE,
        allowNull: false
    },
    details_pv_ref: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

const Materiel = sequelize.define('materiel', {
    code_seaal: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    design_mat: {
        type: DataTypes.STRING(50)
    },
    desc_mat: {
        type: DataTypes.STRING(255)
    },
    etat_mat: {
        type: DataTypes.STRING(12)
    },
    id_mar: {
        type: DataTypes.INTEGER,
        references: {
            model: 'marque',
            key: 'id_mar'
        }
    },
    id_mod: {
        type: DataTypes.INTEGER,
        references: {
            model: 'modele',
            key: 'id_mod'
        }
    },
    id_equip: {
        type: DataTypes.INTEGER,
        references: {
            model: 'equipement',
            key: 'id_equip'
        }
    }
});


const DechargeMat = sequelize.define('decharge_mat', {
    code_seaal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'materiel',
            key: 'code_seaal'
        }
    },
    id_dech: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'decharge',
            key: 'id_dech'
        }
    }
});

module.exports = {
    Fournisseur,
    BL,
    BS,
    BE,
    Reparation,
    Piece,
    RepPiece,
    Equipement,
    Inventaire,
    InvMat,
    Modele,
    Marque,
    Decharge,
    Utilisateur,
    FicheAffectation,
    DemRef,
    PVRef,
    Materiel,
    DechargeMat
};
