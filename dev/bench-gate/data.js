window.BENCHMARK_DATA = {
  "lastUpdate": 1777061039920,
  "repoUrl": "https://github.com/ramses-ramsesi/UltrafastSecp256k1",
  "entries": {
    "Perf Regression Gate": [
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "4d215c4d562a7808acae1def7f03d156b53b366a",
          "message": "feat(gpu): native schnorr_snark_witness_batch kernels on CUDA, OpenCL, Metal\n\nEliminates the last horizontal parity gap: all 16 GPU ABI operations are\nnow backed by native device kernels on every backend (no CPU fallbacks).\n\nCUDA:\n- Add SchnorrSnarkWitnessFlat struct + schnorr_snark_witness_device() to\n  cuda/include/schnorr.cuh (uses lift_x, tagged_hash_fast, be_bytes_to_ff_limbs)\n- Add schnorr_snark_witness_batch_kernel to cuda/src/secp256k1.cu\n- Add extern decl + schnorr_snark_witness_batch() override in gpu_backend_cuda.cu\n\nOpenCL:\n- Add SchnorrSnarkWitnessFlatOCL struct, schnorr_be32_lt_p/is_nonzero_lt_n\n  validators, schnorr_snark_witness_impl(), and schnorr_snark_witness_batch\n  kernel to opencl/kernels/secp256k1_extended.cl\n- Add ext_schnorr_snark_ kernel handle, update ensure_extended_kernels(),\n  add schnorr_snark_witness_batch() override in gpu_backend_opencl.cpp\n\nMetal:\n- Add schnorr_snark_witness_batch kernel to metal/shaders/secp256k1_kernels.metal\n  (inline r<p / s∈[1,n-1] validation, lift_x, tagged_hash_fast, ff-limbs)\n- Add schnorr_snark_witness_batch() override in gpu_backend_metal.mm\n\nDocs:\n- BACKEND_ASSURANCE_MATRIX.md: Y* → Y for schnorr_snark_witness_batch,\n  remove stale CPU-fallback footnote, update parity counts\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-24T11:38:17Z",
          "tree_id": "dfee5d81058a8d65ac665f54eb92e53cd2e8ed48",
          "url": "https://github.com/ramses-ramsesi/UltrafastSecp256k1/commit/4d215c4d562a7808acae1def7f03d156b53b366a"
        },
        "date": 1777061037402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1048.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1425.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8541,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 36519.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 34637.2,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 39905.6,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1352.6,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 268.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 168.4,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 285.4,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1456,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 15368.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 83216.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 41616.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 11467.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 10300.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 59384.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 42311.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 47303.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 188900.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 47225,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 167411.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 41852.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 754411.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 47150.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 666919.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 41682.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3027612.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 47306.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2679813.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 41872.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 5616140.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 43876.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 5263766.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 41123.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 7502641.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 39076.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 7150515.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 37242.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 161475,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 649836.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2587363.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 5318908.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 8001283,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2049.7,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 23788.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 46121.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 159.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 443.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 306.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 301.2,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 32505,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 99509.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 26601.6,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 76057,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 25011.1,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 480.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 493.9,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 470.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 15367.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 15290.8,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 53638.8,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 16000.8,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1089.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 48230.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 47723.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 19716.5,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 27029.8,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1495.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 136627.9,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 165184.2,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 164407.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 56883.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 82323.1,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1194.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2311.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1236.2,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 160.7,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 284.1,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 41350.5,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 19539.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 21950.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 38768,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3082.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 23531.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 43991,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 419900.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 444799.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 401434.2,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 71481.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 53685.2,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 48915.2,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 97411.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 122070.2,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 27393245.2,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 3296108.5,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 39936.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 57307.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 25238.6,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 73286.7,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 71848.2,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 49856.9,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 49453.1,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 95027.8,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 176146.2,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 89680.9,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 63132.4,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1102.9,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 113988.8,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 93940.1,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 34355.1,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 40592.9,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 277.8,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 364.3,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 101022.7,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1242161.1,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 19960.6,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 20277.4,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1428.1,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2973167.1,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1803.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 2334.3,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 1333.4,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 258.3,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2920.7,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 3015.9,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 108090.6,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 70121.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1151.6,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1132.8,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 845.9,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 866,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 354334.6,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 1009.3,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 2068.5,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 3123.7,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 2064.1,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}