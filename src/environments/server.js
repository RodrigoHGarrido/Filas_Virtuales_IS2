const {Client } = require('pg')
const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const client = new Client({
    user: 'isw2020d',
    host: 'plop.inf.udec.cl',
    database: 'isw2020d',
    password: 'isw2020d',
  })
  client.connect(function(error)  {
      if(error){
          message="no me pude conectar"+error;
          console.error(message);
          client.end();
      }
      console.log("Conectado!");
  });
  app.use(cors())
  app.use(bodyParser.json());
/*client.query('SELECT * from prueba', (err, res) => {
    console.log(res);
    client.end();
  })*/
/**************************Consulta para obtener el número de clientes en la fila de una tienda*******************************/
app.get('/prueba/:id',(req,res)=>{
    console.log("hola");
    var id= req.params.id;
    const select_query=`SELECT COUNT(id_tienda) as cantidad FROM fila where id_tienda=$1`;
    client.query(select_query,[id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(select_query);
            console.log(result);
            return res.json({
                data: result
            })
        }
    });
});
app.post('/registrar-usuario',bodyParser.json(),(req,res)=>{
    rut_cliente=req.body.rut_cliente;
    const select_query=`SELECT rut_cliente FROM cliente WHERE cliente.rut_cliente=$1`;
    const insert_query= `INSERT INTO cliente(rut_cliente,nombre_cliente,numero_contacto,contrasena) VALUES('${req.body.rut_cliente}','${req.body.nombre}','${req.body.telefono}','${req.body.contrasena}') ON CONFLICT DO NOTHING`;
    client.query(select_query,[rut_cliente],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error al crear la cuenta');
            res.json(res.body);
        }else{
            if(result.rowCount==0){
                client.query(insert_query,(err2,result2)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('Error al crear la cuenta');
                        res.json(res.body);
                    }else{
                        console.log("Cuenta creada");
                        res.json(res.body);
                    }
                })
            }else{
                console.log("Cuenta ya registrada");
            }
            res.json(res.body);
        }
    })
})
app.post('/verificar-usuario',bodyParser.json(),(req,res)=>{
    rut_cliente=req.body.rut_cliente;
    contrasena=req.body.contrasena;
    const select_query=`SELECT rut_cliente FROM cliente WHERE cliente.rut_cliente=$1 AND cliente.contrasena=$2`;
    client.query(select_query,[rut_cliente,contrasena],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    })
})

app.post('/verificar-cajero', bodyParser.json(), (req,res)=>{
	rut_cajero=req.body.rut_cajero;
	contrasena=req.body.contrasena;
	//const select_query=`SELECT rut_trabajador FROM trabajador WHERE trabajador.rut_trabajador=$1 AND trabajador.contrasena=$2`;
	const select_query=`SELECT rut_trabajador,id_tienda,capacidad FROM trabajador NATURAL JOIN trabaja NATURAL JOIN tienda
	WHERE rut_trabajador =$1 AND contrasena=$2 AND tipo='cajero'`;
	client.query(select_query,[rut_cajero,contrasena],(err,result)=>{
		if(err){
            console.log(err);
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
	})
})

app.post('/verificar-admin', bodyParser.json(), (req,res)=>{
	rut_admin=req.body.rut_admin;
	contrasena=req.body.contrasena;
	const select_query=`SELECT rut_trabajador,id_tienda FROM trabajador NATURAL JOIN trabaja NATURAL JOIN tienda
	WHERE rut_trabajador =$1 AND contrasena=$2 AND tipo='admin'`;
	client.query(select_query,[rut_admin,contrasena],(err,result)=>{
		if(err){
            console.log(err);
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
	})
})

app.post('/prueba2/:hora', bodyParser.json(),(req,res)=>{
    rut_cliente=req.body.rut_cliente;
    hora=req.params.hora;
    console.log(hora)
    const select_query=`INSERT INTO cliente (rut_cliente,nombre_cliente,numero_contacto) VALUES('${req.body.rut_cliente}','${req.body.nombre_cliente}','${req.body.numero_contacto}') ON CONFLICT DO NOTHING`;
    client.query(select_query,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('asdasdas');
        }else{
            const select_query2=`INSERT INTO fila (id_tienda,rut_cliente,hora_entrada) VALUES('1','${req.body.rut_cliente}',$1) ON CONFLICT DO NOTHING`;
            client.query(select_query2,[hora],(err2,result2)=>{
                if(err2){
                    console.log(err2);
                }else{
                    console.log("Aquí")
                    const select_query3=`SELECT rut_cliente FROM cliente WHERE rut_cliente=$1`
                    client.query(select_query3,[rut_cliente],(err,result3)=>{
                        if(err){

                        }else{
                            return res.json({
                                data: result3
                            })
                        }
                    })
                }
            });
        }
    });
});

app.get('/cliente/:id/:id_tienda',(req,res)=>{
    var rut_cliente= req.params.id;
    var id_tienda=req.params.id_tienda;
    const select_query=`SELECT rut_cliente,puesto_fila FROM fila where rut_cliente=$1 AND id_tienda=$2`;
    client.query(select_query,[rut_cliente,id_tienda],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(select_query);
            console.log(result);
            return res.json({
                data: result
            })
        }
    });
});

app.get('/filas-actuales/:rut',(req,res)=>{
    var rut_cliente=req.params.rut;
    const select_query=`SELECT nombre_tienda,puesto_fila, (SELECT min(puesto_fila) as cantidad FROM fila) as cantidad FROM fila,tienda WHERE fila.rut_cliente=$1 AND fila.id_tienda=tienda.id_tienda`;
    client.query(select_query,[rut_cliente],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(select_query);
            console.log(result);
            return res.json({
                data: result
            })
        }
    });    
});

// Query para que el administrador reinicie la fila, borrando todas las entradas de su fila.
app.delete('/borrar-filas/:id_tienda',(req,res)=>{
    id_tienda=req.params.id_tienda;
    console.log(id_tienda);
    const delete_query=`DELETE FROM fila WHERE fila.id_tienda = $1`;

    client.query(delete_query,[id_tienda],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    });
});

app.get('/siguiente-cliente/:id',(req,res)=>{
    var id =req.params.id;
    const select_query=`SELECT nombre_cliente, puesto_fila FROM fila, cliente WHERE cliente.rut_cliente=fila.rut_cliente AND fila.id_tienda=$1 ORDER BY fila.puesto_fila LIMIT 1`;
    client.query(select_query,[id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            return res.json({
                data:result
            })
        }
    });
});
app.get('/borrar-cliente-actual/:id',(req,res)=>{
    var id =req.params.id;
    const delete_query=`DELETE FROM fila WHERE fila.puesto_fila=(SELECT puesto_fila FROM fila ORDER BY puesto_fila LIMIT 1) AND fila.id_tienda=$1`;
    client.query(delete_query,[id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(delete_query);
            console.log(result);
            res.json(res.body);
        }
    })
})
//Query para resetear secuencia de la fila.
app.post('/reiniciar-seq',(req,res)=>{
    id_tienda=req.params.id_tienda;
    console.log(id_tienda);
    const reset_seq_query= 'ALTER SEQUENCE public.fila_puesto_fila_seq RESTART WITH 1';

    client.query(reset_seq_query, (err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    });
});

app.get('/clientes-en-fila/:id_tienda',(req,res)=>{
    console.log("hola");
    id_tienda= req.params.id_tienda;
    const select_query=`SELECT fila.rut_cliente, nombre_cliente, puesto_fila FROM fila, cliente 
    WHERE fila.id_tienda= $1 AND fila.rut_cliente = cliente.rut_cliente`;
    client.query(select_query,[id_tienda],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(select_query);
            console.log(result);
            return res.json({
                data: result
            })
        }
    });
});



//Consultas a las que se le hicieron cambios(Rodrigo)

app.post('/ingresar-fila/:rut/:id/:hora/:lat/:lng',bodyParser.json(),(req,res)=>{
    rut_cliente=req.params.rut;
    id=req.params.id;
    hora=req.params.hora;
    lat=req.params.lat;
    lng=req.params.lng;
    console.log(rut_cliente);
    console.log(id);
    console.log(hora);
    const insert_query=`INSERT INTO fila(id_tienda,rut_cliente,hora_entrada,latitud_cliente,longitud_cliente) VALUES ($1,$2,$3,$4,$5) ON CONFLICT DO NOTHING`;
    client.query(insert_query,[id,rut_cliente,hora,lat,lng],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    })
})

app.get('/tiendas',(req,res)=>{
    const select_query=`SELECT * from tienda`
    client.query(select_query,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            return res.json({
                data:result
            })
        }
    });
});

app.post('/send/:rut/:lat/:lng',(req,res)=>{
    rut_cliente = req.params.rut;
    lat_cliente = req.params.lat;
    lng_cliente = req.params.lng;
    const insert_query=`UPDATE fila SET latitud_cliente=$2, longitud_cliente=$3 WHERE rut_cliente=$1`
    client.query(insert_query,[rut_cliente,lat_cliente,lng_cliente],(err,result)=>{
        if(err){
            console.log(err)

        }
        else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    })
})

app.get('/get/:id_t',(req,res)=>{
    id_t=req.params.id_t;
    const select_query = `Select latitud_cliente, longitud_cliente,latitud,longitud from fila,tienda
    where fila.id_tienda=$1 and tienda.id_tienda=$1`;
    client.query(select_query,[id_t],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            return res.json({
                data:result
            })
        }
    })
});

var server = app.listen(8000, function () {
    console.log('Server is running..');
});
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
